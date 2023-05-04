namespace MockOzowMe.Application.Respositoies
{
    public interface IUserRespository : IBaseRepository<User>
    {
        //Task<User> GetByPhoneNumber(string phoneNumber, CancellationToken cancellationToken);
        Task<User> GetByEmail(string email, CancellationToken cancellationToken);
        Task<SignupUserResponse> ConfirmUserSignUpAsync(ConfirmUserSignRequest confirmUserSignDto);
        Task<User> ChangePasswordAsync(Contracts.Users.ChangePassword.ChangePasswordRequest changePasswordDto);
        Task<User> ForgotPasswordAsync(string EmailAddress);
        Task<SgnoutUserResponse> SignoutAsync(SignoutUserRequest signoutDto);
        Task<User> ResetPasswordWithConfirmationCodeAsync(ResetPasswordRequest resetPasswordDto);
        Task<User> UpdateUserAttributesAsync(UpdateUserAttributesResquest updateUserAttributesDto);
    }
}
