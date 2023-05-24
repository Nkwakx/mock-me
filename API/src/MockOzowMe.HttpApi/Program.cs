var builder = WebApplication.CreateBuilder(args);
var appConfig = new AppConfig(builder.Configuration);
builder.Services.ConfigurePersistence(builder.Configuration, appConfig.ToString());
builder.Services.ConfigureApplication();

builder.Services.ConfigureApiBehavior();
builder.Services.ConfigureCorsPolicy();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();
app.UseCors();
app.UseErrorHandler();
app.MapControllers();
app.Run();
