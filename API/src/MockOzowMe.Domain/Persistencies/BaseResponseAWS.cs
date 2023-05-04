namespace MockOzowMe.Domain.Persistencies
{
    public class BaseResponseAWS
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; } = string.Empty;
        public CognitoStatusCodes Status { get; set; }
    }
}
