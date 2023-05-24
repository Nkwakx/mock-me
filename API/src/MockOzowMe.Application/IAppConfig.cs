namespace MockOzowMe.Application
{
    public interface IAppConfig
    {
        public string ConnectionStrings { get; }
        public ApplicationConfig AWSConfig { get; }
    }
}
