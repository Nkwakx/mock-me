export interface User {
      Id?: string;
      phoneNumber?: string;
      TokenConfig?: TokenConfig;
      userDetails: any;
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
      idToken?: string;
      expiresIn?: string;
      accessToken?: string;
      refreshToken?: string;
}
export interface UserSigninRequest {
      phoneNumber?: string;
      password?: string;
}