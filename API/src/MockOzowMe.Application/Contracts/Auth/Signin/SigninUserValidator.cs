namespace MockOzowMe.Application.Contracts.Users.Signin
{
    public class SigninUserValidator : AbstractValidator<SigninUserRequest>
    {
        public SigninUserValidator()
        {
            RuleFor(x => x.Password).NotEmpty().MaximumLength(25);
            RuleFor(x => x.PhoneNumber).NotEmpty().MinimumLength(10).MaximumLength(15);
        }
    }
}
