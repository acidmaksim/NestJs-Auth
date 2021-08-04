import { SetMetadata } from '@nestjs/common';
import { AccessType } from 'src/auth/types';

export const CrmAccess = (access: AccessType) => SetMetadata('access', access);
