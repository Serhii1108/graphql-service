export interface UserRegistrationModel {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface User extends UserRegistrationModel {
  _id: string;
}
