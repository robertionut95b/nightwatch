import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

export interface Context {
  prisma: PrismaClient;
}

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
  } else {
    let globalWithPrisma = global as typeof globalThis & Context;
    if (!globalWithPrisma.prisma) {
      globalWithPrisma.prisma = new PrismaClient();
    }
    prisma = globalWithPrisma.prisma;
  }
}

//@ts-ignore
export default prisma;