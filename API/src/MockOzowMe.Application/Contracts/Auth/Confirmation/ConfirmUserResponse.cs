namespace MockOzowMe.Application.Contracts.Users.Confirmation
{
    public class ConfirmUserResponse : BaseResponseAWS
    {
        public string UserId { get; set; } = string.Empty;
        public string EmailAddress { get; set; } = string.Empty;
    }
}
