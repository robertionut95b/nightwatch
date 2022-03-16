-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "SubmissionReason" AS ENUM ('CREATE', 'UPDATE', 'INAPPROPIATE');

-- CreateTable
CREATE TABLE "AskSubmission" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "status" "SubmissionStatus" NOT NULL,
    "reason" "SubmissionReason" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AskSubmission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AskSubmission" ADD CONSTRAINT "AskSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
