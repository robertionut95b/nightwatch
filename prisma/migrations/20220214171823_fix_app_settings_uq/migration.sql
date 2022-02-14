/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `AppSettings` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "AppSettings_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "AppSettings_name_userId_key" ON "AppSettings"("name", "userId");
