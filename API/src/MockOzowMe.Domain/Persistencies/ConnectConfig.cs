namespace MockOzowMe.Domain.Persistencies
{
    public class ConnectConfig
    {
        public string ClientId { get; set; }
        public string MetadataAddress { get; set; }
        public string CognitoDomain { get; set; }
        public string SaveToken { get; set; }
        public string IncludeErrorDetails { get; set; }
        public string RequireHttpsMetadata { get; set; }
        public string ResponseType { get; set; }
    }
}
