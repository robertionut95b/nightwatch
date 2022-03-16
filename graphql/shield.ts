/* eslint-disable @typescript-eslint/no-unused-vars */
import { Role } from '@prisma/client';
import { allow, rule, shield } from 'graphql-shield';
import { getSession } from 'next-auth/client';
import { AppSession } from 'pages/api/auth/[...nextauth]';

const isAuthenticated = rule()(async (ctx) => {
  const session = (await getSession({ req: ctx.req })) as AppSession;
  return Boolean(session);
});

const isUser = rule()(async (parent, args, ctx, info) => {
  const session = (await getSession({
    req: ctx.req,
  })) as AppSession;
  return (
    session &&
    session.user &&
    (session.role === Role.USER || session.role === Role.ADMIN)
  );
});

const isAdmin = rule()(async (parent, args, ctx, info) => {
  const session = (await getSession({
    req: ctx.req,
  })) as AppSession;
  return session && session.user && session.role === Role.ADMIN;
});

const permissions = shield(
  {
    Query: {
      '*': allow,
      watchlists: isUser,
    },
    Mutation: {
      '*': isUser,
    },
  },
  { allowExternalErrors: true, debug: process.env.NODE_ENV !== 'production' },
);

export default permissions;
