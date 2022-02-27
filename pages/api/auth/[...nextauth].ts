import NextAuth, { Session } from 'next-auth';
import Providers from '../../../node_modules/next-auth/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../lib/PrismaClient/prisma';
import { Role } from '@prisma/client';

export interface AppSession extends Session {
  userSettings?: { id: string; name: string; value: string }[];
  role: string;
  user: Session['user'] & {
    id?: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    role?: string | null;
  };
}

export default NextAuth({
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        }
      },
      from: process.env.EMAIL_FROM,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
  ],
  database: process.env.DATABASE_URL,
  secret: process.env.SECRET,
  session: {
    jwt: false,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  debug: process.env.NODE_ENV !== 'production',
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

      const appSession = session as AppSession;
      const id = user.id as string;
      const userRecord = await prisma.user.findUnique({
        where: { id: id },
        include: {
          settings: {
            select: {
              id: true,
              name: true,
              value: true,
            },
          },
        },
      });
      if (appSession.user) {
        appSession.user.id = userRecord?.id;
        appSession.user.username = userRecord?.username;
        appSession.user.firstName = userRecord?.firstName;
        appSession.user.lastName = userRecord?.lastName;
      }
      appSession.userSettings = userRecord?.settings || [];
      appSession.role = userRecord?.role || Role.USER;
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
