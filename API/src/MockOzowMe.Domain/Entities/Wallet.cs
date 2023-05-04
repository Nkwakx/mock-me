namespace MockOzowMe.Domain.Entities
{
    public sealed class Wallet: BaseEntity
    {
        [JsonProperty("balance")]
        public decimal Balance { get; set; }
        [JsonProperty("active")]
        public bool Active { get; set; }
    }
}
