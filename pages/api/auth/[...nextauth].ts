import NextAuth, { Session } from 'next-auth';
import Providers from '../../../node_modules/next-auth/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../lib/PrismaClient/prisma';
import { AppSettings, Role } from '@prisma/client';

export interface AppSession extends Session {
  userSettings?: AppSettings[];
  role: string;
}

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
    jwt: false,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  debug: false,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/',
  },
  callbacks: {
    async session(session, user) {
      if (!user) return session;

      const id = user.id as string;
      const userRecord = await prisma.user.findUnique({
        where: { id: id },
        include: {
          settings: true,
        },
      });
      session.userSettings = userRecord?.settings || [];
      session.role = userRecord?.role || Role.USER;
      return session;
    },
  },
  events: {
    async signIn({ user, isNewUser }) {
      if (isNewUser) {
        // create default watchlist after signup
        const email = user?.email || undefined;
        const prismaUser = await prisma.user.findUnique({
          where: { email: email },
        });
        if (!prismaUser) return;
        const { id: userId } = prismaUser;

        const watchlist = await prisma.watchlist.create({
          data: {
            user: {
              connect: {
                id: userId,
              },
            },
            default: true,
            name: 'Default watchlist',
          },
        });

        if (watchlist)
          console.log(`Default watchlist created for user ${email}`);
      }
    },
  },
});
