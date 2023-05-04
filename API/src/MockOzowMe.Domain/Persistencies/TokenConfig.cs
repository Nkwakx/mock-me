namespace MockOzowMe.Domain.Persistencies
{
    public class TokenConfig
    {
        public string IdToken { get; set; }
        public string AccessToken { get; set; }
        public int ExpiresIn { get; set; }
        public string RefreshToken { get; set; }
    }
}
