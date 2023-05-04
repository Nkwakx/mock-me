namespace MockOzowMe.Application.Contracts.Users.Signin
{
    public class SigninUserResponse : BaseResponseAWS
    {
        public string? UserId { get; set; }
        public string? PhoneNumber { get; set; }
        public TokenConfig? Tokens { get; set; }
    }
}
