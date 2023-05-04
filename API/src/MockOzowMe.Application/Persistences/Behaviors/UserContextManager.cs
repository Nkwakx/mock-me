namespace MockOzowMe.Application.Persistences.Behaviors
{
    public class UserContextManager
    {
        public async Task SignIn(HttpContext httpContext, Dictionary<string, string> user, bool isPersistent = false)
        {
            string authenticationScheme = CookieAuthenticationDefaults.AuthenticationScheme;

            ClaimsIdentity claimsIdentity = new ClaimsIdentity(GetUserClaims(user), authenticationScheme);

            ClaimsPrincipal claimsPrincipal = new ClaimsPrincipal(claimsIdentity);

            var authProperties = new AuthenticationProperties
            {

            };

            await httpContext.SignInAsync(authenticationScheme, claimsPrincipal, authProperties);
        }

        public async Task SignOut(HttpContext httpContext)
        {
            await httpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        }

        private IEnumerable<Claim> GetUserClaims(Dictionary<string, string> user)
        {
            List<Claim> claims = new List<Claim>();
            foreach (var attr in user)
            {
                claims.Add(new Claim(attr.Key, attr.Value));
            }
            return claims;
        }
    }
}