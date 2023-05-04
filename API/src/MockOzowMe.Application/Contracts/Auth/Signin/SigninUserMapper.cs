namespace MockOzowMe.Application.Contracts.Users.Signin
{
    public class SigninUserMapper : Profile
    {
        public SigninUserMapper()
        {
            CreateMap<SigninUserRequest, User>();
            CreateMap<User, SigninUserResponse>();
        }
    }
}
