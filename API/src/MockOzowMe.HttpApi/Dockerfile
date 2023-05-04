#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["MockOzowMe.HttpApi/MockOzowMe.HttpApi.csproj", "MockOzowMe.HttpApi/"]
COPY ["MockOzowMe.Application/MockOzowMe.Application.csproj", "MockOzowMe.Application/"]
COPY ["MockOzowMe.Domain/MockOzowMe.Domain.csproj", "MockOzowMe.Domain/"]
COPY ["MockOzowMe.Infrastructure/MockOzowMe.Infrastructure.csproj", "MockOzowMe.Infrastructure/"]
RUN dotnet restore "MockOzowMe.HttpApi/MockOzowMe.HttpApi.csproj"
COPY . .
WORKDIR "/src/MockOzowMe.HttpApi"
RUN dotnet build "MockOzowMe.HttpApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MockOzowMe.HttpApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MockOzowMe.HttpApi.dll"]