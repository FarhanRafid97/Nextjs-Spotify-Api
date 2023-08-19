import { JWT } from 'next-auth/jwt';

import NextAuth, { DefaultSession } from 'next-auth';

interface JWT extends TokenTypesAuth {}

declare module 'next-auth/jwt' {
  export interface JWT extends TokenTypesAuth {}
}

declare module 'next-auth' {
  interface Session {
    user: JWT & DefaultSession['user'];
  }
}
