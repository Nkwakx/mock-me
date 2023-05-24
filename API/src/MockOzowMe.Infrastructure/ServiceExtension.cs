namespace MockOzowMe.Infrastructure
{
    public static class ServiceExtension
    {
        public static void ConfigurePersistence(this IServiceCollection services, IConfiguration configuration, string connectionString)
        {

            services.AddEntityFrameworkNpgsql().AddDbContext<DataContext>(option => option.UseNpgsql(connectionString));
            services.Configure<ApplicationConfig>(configuration.GetSection("AppConfig:AWS"));
            services.Configure<CookiePolicyOptions>(options =>
            {
                options.CheckConsentNeeded = context => false;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });
            services.AddHttpContextAccessor();

            services.AddCognitoIdentity();
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            })
            .AddCookie(options =>
            {
                options.ExpireTimeSpan = TimeSpan.FromMinutes(60);
                options.SlidingExpiration = true;
            });
            services.AddRouting();

            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IUserRespository, UserRespository>();
            services.AddScoped<UserContextManager>();
        }
    }
}