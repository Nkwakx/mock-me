namespace MockOzowMe.Application.Contracts.Users.Confirmation
{
    public class ConfirmUserSignRequest
    {
        public string ConfirmationCode { get; set; } = string.Empty;
        public string EmailAddress { get; set; } = string.Empty;
        public string UserId { get; set; } = string.Empty;
    }
}
