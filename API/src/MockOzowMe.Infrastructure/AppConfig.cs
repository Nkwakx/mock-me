using Microsoft.Extensions.Configuration;
using MockOzowMe.Application;

namespace MockOzowMe.Infrastructure
{
    public class AppConfig : IAppConfig
    {
        private readonly IConfiguration _configuration;
        public AppConfig(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string ConnectionStrings => GetAppSettingValue("Data:ConnectionStrings:postgress");

        public ApplicationConfig AWSConfig => _configuration.GetSection("AppConfig:AWS").Get<ApplicationConfig>();

        private string GetAppSettingValue(string name)
        {
            return _configuration.GetSection(name).Value;
        }
    }
}
