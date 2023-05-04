namespace MockOzowMe.Application.Contracts.Users.Signout
{
    public class SignoutUserRequest
    {
        public string UserId { get; set; } = string.Empty;
        public string AccessToken { get; set; } = string.Empty;
    }
}
