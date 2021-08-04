import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const BodyWithProfile = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const { user, body } = ctx.switchToHttp().getRequest();

    body.profileId = user.profileId;

    return body;
  },
);
