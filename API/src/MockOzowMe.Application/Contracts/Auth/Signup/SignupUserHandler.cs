namespace MockOzowMe.Application.Contracts.Users.Signup
{
    public class SignupUserHandler : IRequestHandler<SignupUserResquest, SignupUserResponse>
    {
        private readonly ApplicationConfig _applicationConfig;
        private readonly AmazonCognitoIdentityProviderClient _provider;
        public SignupUserHandler(IOptions<ApplicationConfig> applicationConfig)
        {
            _applicationConfig = applicationConfig.Value;
            _provider = new AmazonCognitoIdentityProviderClient
                (
                    _applicationConfig.AccessKeyId,
                    _applicationConfig.AccessSecretKey,
                    RegionEndpoint.GetBySystemName(_applicationConfig.Region)
                );
        }
        public async Task<SignupUserResponse> Handle(SignupUserResquest request, CancellationToken cancellationToken)
        {
            var signUpRequest = new SignUpRequest
            {
                ClientId = _applicationConfig.ClientId,
                Password = request.Password,
                Username = request.PhoneNumber
            };
            var attributes = new List<AttributeType>()
            {
                  new AttributeType(){ Name="email",        Value=request.EmailAddress },
                  new AttributeType(){ Name="name",         Value=request.Name },
                  new AttributeType(){ Name="family_name",  Value=request.LastName },
                  new AttributeType(){ Name="phone_number", Value=request.PhoneNumber },
            };
            foreach (var attribute in attributes)
            {
                signUpRequest.UserAttributes.Add(attribute);
            }
            SignUpResponse response = await _provider.SignUpAsync(signUpRequest);

            var signUpResponse = new SignupUserResponse
            {
                UserId = response.UserSub,
                EmailAddress = request.EmailAddress,
                Message = $"Confirmation Code sent to {response.CodeDeliveryDetails.Destination} via {response.CodeDeliveryDetails.DeliveryMedium.Value}",
                Status = CognitoStatusCodes.USER_UNCONFIRMED,
                IsSuccess = true
            };

            return signUpResponse;
        }
    }
}
