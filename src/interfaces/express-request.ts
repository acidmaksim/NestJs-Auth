import { CurrentUser } from './current-user';
import { Request } from 'express';

export interface ExpressRequest extends Request {
  user?: CurrentUser;
}
