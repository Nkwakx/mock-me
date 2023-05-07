export interface User {
      UserId?: string;
      PhoneNumber?: string;
      TokenConfig?: TokenConfig;
}
export interface UserRequest {
      Id?: string;
      Password?: string;
      PhoneNumber?: string;
      Name?: string;
      LastName?: string;
      EmailAddress?: string;
}

export interface UserResponse {
      UserId?: string;
      EmailAddress?: string;
}
export interface TokenConfig{
      IdToken?: string;
      ExpiresIn?: string;
      AccessToken?: string;
      RefreshToken?: string;
}
export interface UserSigninRequest {
      PhoneNumber?: string;
      Password?: string;
}