import { LoginPayloadDTO } from 'src/auth/dtos/loginPayload.dto';

export const authorizationToLoginPayload = (
  authorization: string,
): LoginPayloadDTO | undefined => {
  const authorizationSplited = authorization.split('.');
  if (authorizationSplited.length < 3 || !authorizationSplited[1]) {
    return undefined;
  }
  return JSON.parse(
    Buffer.from(authorizationSplited[1], 'base64').toString('ascii'),
  );
};
