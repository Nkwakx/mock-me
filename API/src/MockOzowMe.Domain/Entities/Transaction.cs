namespace MockOzowMe.Domain.Entities
{
    public sealed class Transaction: BaseEntity
    {
        [JsonProperty("currency")]
        public CurrencyCode Currency { get; set; }
        //public string Currency { get; set; }
        [JsonProperty("amount")]
        public decimal Amount { get; set; }
        [JsonProperty("description")]
        public string Description { get; set; }
        [JsonProperty("status")]
        public string Status { get; set; }
        [JsonProperty("source")]
        public User Source { get; set; }

        //[JsonProperty("source")]
        //public User Destination { get; set; }
      
    }
}
