import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import client from './lib/mongoDB';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      // authorization: {
      //   params: {
      //     scope:
      //       'openid email profile https://www.googleapis.com/auth/youtube.upload',
      //   },
      // },
    }),
  ],
  adapter: MongoDBAdapter(client),
  callbacks: {
    async jwt(token, user, account, profile) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    async session(session, token) {
      if (token) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
});
