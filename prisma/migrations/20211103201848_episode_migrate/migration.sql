/*
  Warnings:

  - You are about to drop the column `runTime` on the `Episode` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Language` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imdbRating` to the `Episode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plot` to the `Episode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `poster` to the `Episode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `runtime` to the `Episode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Episode" DROP COLUMN "runTime",
ADD COLUMN     "imdbRating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "plot" TEXT NOT NULL,
ADD COLUMN     "poster" TEXT NOT NULL,
ADD COLUMN     "runtime" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Language_name_key" ON "Language"("name");
