namespace MockOzowMe.Application.Contracts.Users.ResetPassword
{
    public class ResetPasswordRequest
    {
        public string UserId { get; set; } = string.Empty;
        public string NewPassword { get; set; } = string.Empty;
        public string ConfirmationCode { get; set; } = string.Empty;
        public string EmailAddress { get; set; } = string.Empty;
    }
}
