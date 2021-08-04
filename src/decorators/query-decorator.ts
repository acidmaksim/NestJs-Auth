import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const QueryWithProfile = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const { user, query } = ctx.switchToHttp().getRequest();
    const q = query || {};

    if (user) {
      q.where = q.where || {};
      q.where.profileId = user.profileId;
    }

    return q;
  },
);
