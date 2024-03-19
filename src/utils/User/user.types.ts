export interface IUserRegistration {
  username: string;
  email: string;
  password: string;
  course_group: number;
}

export interface IUserAuthorization {
  email: string;
  password: string;
}

export interface IUser {
  username: string;
  email: string;
}

export interface ITokens {
  refresh: string;
  access: string;
}

export interface IActivation {
  uid: string;
  token: string;
}
