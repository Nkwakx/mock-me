namespace MockOzowMe.Infrastructure.Repositories
{
    public class UserRespository : BaseRepository<User>, IUserRespository
    {
        private readonly HttpContext _httpContext;
        private readonly UserContextManager _userManager;
        private readonly ApplicationConfig _applicationConfig;
        private readonly AmazonCognitoIdentityProviderClient _provider;
        public UserRespository(DataContext context, IHttpContextAccessor httpContextAccessor, IOptions<ApplicationConfig> applicationConfig, UserContextManager userManager) : base(context)
        {
            _applicationConfig = applicationConfig.Value;
            _provider = new AmazonCognitoIdentityProviderClient(
                    _applicationConfig.AccessKeyId,
                    _applicationConfig.AccessSecretKey,
                    RegionEndpoint.GetBySystemName(_applicationConfig.Region)
                );
            _httpContext = httpContextAccessor.HttpContext;
            _userManager = userManager;
        }
        public async Task<SgnoutUserResponse> SignoutAsync(SignoutUserRequest signoutDto)
        {
            var request = new GlobalSignOutRequest { AccessToken = signoutDto.AccessToken };
            var response = await _provider.GlobalSignOutAsync(request);

            await _userManager.SignOut(_httpContext);
            return new SgnoutUserResponse { UserId = signoutDto.UserId, Message = "User Signed Out" };
        }
        public Task<User> ChangePasswordAsync(Application.Contracts.Users.ChangePassword.ChangePasswordRequest changePasswordDto)
        {
            throw new NotImplementedException();
        }

        public async Task<SignupUserResponse> ConfirmUserSignUpAsync(ConfirmUserSignRequest confirmUserSignDto)
        {
            ConfirmSignUpRequest confirm = new ConfirmSignUpRequest
            {
                ClientId = _applicationConfig.ClientId,
                ConfirmationCode = confirmUserSignDto.ConfirmationCode,
                Username = confirmUserSignDto.EmailAddress
            };
            await _provider.ConfirmSignUpAsync(confirm);

            return new SignupUserResponse
            {
                EmailAddress = confirmUserSignDto.EmailAddress,
                UserId = confirmUserSignDto.UserId,
                Message = "User Confirmed",
                IsSuccess = true
            };
        }

        public Task<User> ForgotPasswordAsync(string EmailAddress)
        {
            throw new NotImplementedException();
        }

        public Task<User> GetByEmail(string email, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        //public Task<User> GetByPhoneNumber(string phoneNumber, CancellationToken cancellationToken)
        //{
        //    return Context.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber, cancellationToken);
        //}

        public Task<User> ResetPasswordWithConfirmationCodeAsync(ResetPasswordRequest resetPasswordDto)
        {
            throw new NotImplementedException();
        }
        public Task<User> UpdateUserAttributesAsync(UpdateUserAttributesResquest updateUserAttributesDto)
        {
            throw new NotImplementedException();
        }

    }
}
