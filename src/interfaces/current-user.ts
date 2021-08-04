import { UserEntity } from '@src/models/user/entities/user.entity';

export type CurrentUser = {
  id: string;
  roles: string[];
  accessType: 'user' | 'admin' | 'fake';
  profileId?: string;

  data: UserEntity;
};
