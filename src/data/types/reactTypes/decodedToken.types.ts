export type DecodedTokenType = {
  id: number;
  name: string;
  email: string;
  role: string;
  sub: string;
  exp: number;
  iat?: number;
  iss?: string;
  aud?: string;
};
