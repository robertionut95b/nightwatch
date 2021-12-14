/*
  Warnings:

  - A unique constraint covering the columns `[imdbID]` on the table `Episode` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imdbID]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imdbID]` on the table `Serie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imdbID` to the `Episode` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imdbID` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imdbID` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Movie_title_key";

-- DropIndex
DROP INDEX "Serie_title_key";

-- AlterTable
ALTER TABLE "Episode" ADD COLUMN     "imdbID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "imdbID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Serie" ADD COLUMN     "imdbID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Episode_imdbID_key" ON "Episode"("imdbID");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_imdbID_key" ON "Movie"("imdbID");

-- CreateIndex
CREATE UNIQUE INDEX "Serie_imdbID_key" ON "Serie"("imdbID");
