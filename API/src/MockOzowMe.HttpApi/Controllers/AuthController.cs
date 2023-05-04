namespace MockOzowMe.HttpApi.Controllers
{
    [ApiController]
    [Route("auth")]
    public class AuthController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AuthController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<SigninUserResponse>> LoginAsync([FromBody] SigninUserRequest request, CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(request, cancellationToken);
            return Ok(response);
        }
       
        [HttpPost]
        [Route("register")]
        public async Task<ActionResult<SignupUserResponse>> SignupAsync([FromBody] SignupUserResquest request, CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(request, cancellationToken);
            return Ok(response);
        }
    }
}
