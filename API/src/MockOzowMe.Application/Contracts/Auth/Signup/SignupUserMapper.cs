namespace MockOzowMe.Application.Contracts.Users.Signup
{
    public sealed class SignupUserMapper : Profile
    {
       public SignupUserMapper() 
       {
            CreateMap<SignupUserResponse, User>();
            CreateMap<User, SignupUserResponse>();
       }
    }
}
