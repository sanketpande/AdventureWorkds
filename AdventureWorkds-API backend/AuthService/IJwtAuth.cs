namespace AdventureWorkds_API_backend.AuthService
{
    public interface IJwtAuth
    {
        string Authentication(string username, string password);
    }
}
