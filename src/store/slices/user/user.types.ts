import { ITokens, IUser } from '../../../utils/User/user.types';

export interface IUserStorage {
  activation_email: string;
  auth: boolean;
  tokens: ITokens | null;
  user: IUser | null;
}

export const storageUserDefaultState: IUserStorage = {
    activation_email: '',
    auth: false,
    tokens: null,
    user: null,
};
