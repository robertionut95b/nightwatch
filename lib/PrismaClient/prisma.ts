import { Prisma, PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

const prismaOptions: Prisma.PrismaClientOptions = {
  log: ['info', 'warn', 'error'],
};

export interface Context {
  prisma: PrismaClient;
}

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient(prismaOptions);
  } else {
    const globalWithPrisma = global as typeof globalThis & Context;
    if (!globalWithPrisma.prisma) {
      globalWithPrisma.prisma = new PrismaClient(prismaOptions);
    }
    prisma = globalWithPrisma.prisma;
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default prisma;
