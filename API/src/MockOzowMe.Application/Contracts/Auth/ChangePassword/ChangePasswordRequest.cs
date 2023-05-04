namespace MockOzowMe.Application.Contracts.Users.ChangePassword
{
    public class ChangePasswordRequest
    {
        public string CurrentPassword { get; set; } = string.Empty;
        public string NewPassword { get; set; } = string.Empty;
        public string EmailAddress { get; set; } = string.Empty;
    }
}
