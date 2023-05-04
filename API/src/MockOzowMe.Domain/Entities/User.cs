namespace MockOzowMe.Domain.Entities
{
    public sealed class User : BaseEntity
    {
        public string UserId { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string Gender { get; set; }
        public Address Address { get; set; }

        [JsonProperty("cash_balance")]
        public Wallet CashBalance { get; set; }
        public ICollection<Transaction> Users { get; set; }
    }
    public class Address 
    {
        public Guid Id { get; set; }
        public string StreetNumber { get; set; }
        public string StreetName { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
    }

}
