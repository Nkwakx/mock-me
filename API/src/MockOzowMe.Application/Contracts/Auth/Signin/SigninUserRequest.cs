namespace MockOzowMe.Application.Contracts.Users.Signin
{
    public sealed record SigninUserRequest(
        string PhoneNumber,
        string Password
    ) : IRequest<SigninUserResponse>;
    
}
