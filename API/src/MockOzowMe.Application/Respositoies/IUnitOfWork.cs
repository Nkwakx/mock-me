namespace MockOzowMe.Application.Respositoies
{
    public interface IUnitOfWork
    {
        Task Save(CancellationToken cancellationToken);
    }
}
