namespace MockOzowMe.Application.Contracts.Users.UpdateProfile
{
    public class UpdateUserAttributesResquest
    {
        public string UserId { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string AddressEmail { get; set; } = string.Empty;
        public string GivenName { get; set; } = string.Empty;
        public string State { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string Pincode { get; set; } = string.Empty;
        public IFormFile ProfilePhoto { get; set; } 
        public string Address { get; set; } = string.Empty;
        public string AccessToken { get; set; } = string.Empty;
    }
}
