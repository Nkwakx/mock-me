namespace MockOzowMe.Application.Contracts.Users.Signin
{
    public class SigninUserHandler : IRequestHandler<SigninUserRequest, SigninUserResponse>
    {
        private readonly HttpContext _httpContext;
        private readonly UserContextManager _userManager;
        private readonly ApplicationConfig _applicationConfig;
        private readonly CognitoUserPool _userPool;
        private readonly AmazonCognitoIdentityProviderClient _provider;
        public SigninUserHandler(IHttpContextAccessor httpContextAccessor, IOptions<ApplicationConfig> applicationConfig, UserContextManager userManager)
        {
            _applicationConfig = applicationConfig.Value;
            _provider = new AmazonCognitoIdentityProviderClient(
                    _applicationConfig.AccessKeyId,
                    _applicationConfig.AccessSecretKey,
                    RegionEndpoint.GetBySystemName(_applicationConfig.Region)
                );
            _userPool = new CognitoUserPool(_applicationConfig.UserPoolId, _applicationConfig.ClientId, _provider);
            _httpContext = httpContextAccessor.HttpContext;
            _userManager = userManager;
        }
        public async Task<SigninUserResponse> Handle(SigninUserRequest request, CancellationToken cancellationToken)
        {
            try
            {
                var result = await AuthenticateUserAsync(request.PhoneNumber, request.Password);

                if (result.Item1.Username != null)
                {
                    await _userManager.SignIn(_httpContext, new Dictionary<string, string>() {
                        { ClaimTypes.Email, result.Item1.UserID },
                        { ClaimTypes.NameIdentifier, result.Item1.Username }
                    });
                }

                var authResponse = new SigninUserResponse();
                authResponse.PhoneNumber = result.Item1.UserID;
                authResponse.UserId = result.Item1.Username;
                authResponse.Tokens = new TokenConfig
                {
                    IdToken = result.Item2.IdToken,
                    AccessToken = result.Item2.AccessToken,
                    ExpiresIn = result.Item2.ExpiresIn,
                    RefreshToken = result.Item2.RefreshToken
                };
                authResponse.IsSuccess = true;
                return authResponse;
            }
            catch (UserNotConfirmedException)
            {
                var listUsersResponse = await FindUsersByPhoneNumberAddress(request.PhoneNumber);

                if (listUsersResponse != null && listUsersResponse.HttpStatusCode == HttpStatusCode.OK)
                {
                    var users = listUsersResponse.Users;
                    var filtered_user = users.FirstOrDefault(x => x.Attributes.Any(x => x.Name == "phone_number" && x.Value == request.PhoneNumber));

                    var resendCodeResponse = await _provider.ResendConfirmationCodeAsync(new ResendConfirmationCodeRequest
                    {
                        ClientId = _applicationConfig.ClientId,
                        Username = filtered_user?.Username
                    });
                    if (resendCodeResponse.HttpStatusCode == HttpStatusCode.OK)
                    {
                        return new SigninUserResponse
                        {
                            IsSuccess = false,
                            Message = $"Confirmation Code sent to {resendCodeResponse.CodeDeliveryDetails.Destination} via {resendCodeResponse.CodeDeliveryDetails.DeliveryMedium.Value}",
                            Status = CognitoStatusCodes.USER_UNCONFIRMED,
                            UserId = filtered_user?.Username
                        };
                    }
                    else
                    {
                        return new SigninUserResponse
                        {
                            IsSuccess = false,
                            Message = $"Resend Confirmation Code Response: {resendCodeResponse.HttpStatusCode.ToString()}",
                            Status = CognitoStatusCodes.API_ERROR,
                            UserId = filtered_user?.Username
                        };
                    }
                }
                else
                {
                    return new SigninUserResponse
                    {
                        IsSuccess = false,
                        Message = "No Users found for the EmailAddress.",
                        Status = CognitoStatusCodes.USER_NOTFOUND
                    };
                }
            }
            catch (UserNotFoundException)
            {
                return new SigninUserResponse
                {
                    IsSuccess = false,
                    Message = "EmailAddress not found.",
                    Status = CognitoStatusCodes.USER_NOTFOUND
                };
            }
            catch (NotAuthorizedException)
            {
                return new SigninUserResponse
                {
                    IsSuccess = false,
                    Message = "Incorrect username or password",
                    Status = CognitoStatusCodes.API_ERROR
                };
            }
        }
        private async Task<Tuple<CognitoUser, AuthenticationResultType>> AuthenticateUserAsync(string phoneNumber, string password)
        {
            CognitoUser user = new CognitoUser(phoneNumber, _applicationConfig.ClientId, _userPool, _provider);
            InitiateSrpAuthRequest authRequest = new InitiateSrpAuthRequest()
            {
                Password = password
            };

            AuthFlowResponse authResponse = await user.StartWithSrpAuthAsync(authRequest);
            var result = authResponse.AuthenticationResult;
            return new Tuple<CognitoUser, AuthenticationResultType>(user, result);
        }
        private async Task<ListUsersResponse> FindUsersByPhoneNumberAddress(string phoneNumber)
        {
            ListUsersRequest listUsersRequest = new ListUsersRequest
            {
                UserPoolId = _applicationConfig.UserPoolId,
                Filter = $"email=\"{phoneNumber}\""
            };
            return await _provider.ListUsersAsync(listUsersRequest);
        }
    }
}
