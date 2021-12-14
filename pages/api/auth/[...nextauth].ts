import NextAuth from 'next-auth';
import Providers from '../../../node_modules/next-auth/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../lib/PrismaClient/prisma';

export default NextAuth({
  providers: [
    Providers.Email({
      server: `smtp://${process.env.EMAIL_SERVER_USER}:${process.env.EMAIL_SERVER_PASSWORD}@${process.env.EMAIL_SERVER}:${process.env.EMAIL_SERVER_PORT}`,
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.DATABASE_URL,
  secret: process.env.SECRET,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 60 days
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
  },
  debug: true,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/',
  },
});