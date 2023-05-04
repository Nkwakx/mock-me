namespace MockOzowMe.Application.Contracts.Users.Signup
{
    public class SignupUserResponse : BaseResponseAWS
    {
        public string? UserId { get; set; }
        public string? EmailAddress { get; set; }
    }
}
