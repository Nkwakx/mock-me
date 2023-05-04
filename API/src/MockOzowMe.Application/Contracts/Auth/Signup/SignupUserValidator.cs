namespace MockOzowMe.Application.Contracts.Users.Signup
{
    public class SignupUserValidator : AbstractValidator<SignupUserResquest>
    {
        public SignupUserValidator()
        {
            RuleFor(x => x.Password).NotEmpty().MaximumLength(25);
            RuleFor(x => x.EmailAddress).NotEmpty().MaximumLength(25).EmailAddress();
            RuleFor(x => x.Name).NotEmpty().MinimumLength(3).MaximumLength(10);
            RuleFor(x => x.LastName).NotEmpty().MinimumLength(3).MaximumLength(10);
            RuleFor(x => x.PhoneNumber).NotEmpty().MinimumLength(10).MaximumLength(15);
        }
    }
}
