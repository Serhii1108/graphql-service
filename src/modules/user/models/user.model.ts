export interface UserRegistrationDto {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface User extends UserRegistrationDto {
  _id: string;
}
