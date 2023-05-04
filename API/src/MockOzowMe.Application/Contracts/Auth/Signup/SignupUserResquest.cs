namespace MockOzowMe.Application.Contracts.Users.Signup;

public sealed record SignupUserResquest(
    string Password,
    string PhoneNumber,
    string EmailAddress,
    string Name,
    string LastName
) : IRequest<SignupUserResponse>;

