import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { authorizationToLoginPayload } from 'src/utils/base-64-converter';

export const UserId = createParamDecorator((_, context: ExecutionContext) => {
  const { authorization } = context.switchToHttp().getRequest().headers;
  const loginPayload = authorizationToLoginPayload(authorization);
  return loginPayload?.id;
});
