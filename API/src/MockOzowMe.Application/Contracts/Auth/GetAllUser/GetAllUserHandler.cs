namespace MockOzowMe.Application.Contracts.Users.GetAllUser
{
    public sealed class GetAllUserHandler : IRequestHandler<GetAllUserRequest, List<GetAllUserResponse>>
    {
        private readonly IUserRespository _userRespository;
        private readonly IMapper _mapper;

        public GetAllUserHandler(IUserRespository userRespository, IMapper mapper)
        {
            _userRespository = userRespository;
            _mapper = mapper;
        }

        public async Task<List<GetAllUserResponse>> Handle(GetAllUserRequest request, CancellationToken cancellationToken)
        {
            var users = await _userRespository.GetAll(cancellationToken);

            return _mapper.Map<List<GetAllUserResponse>>(users);
        }
    }
}
