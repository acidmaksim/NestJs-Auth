import { CurrentUser } from './current-user';

export type UserJwtData = Omit<CurrentUser, 'roles' | 'data'>;
