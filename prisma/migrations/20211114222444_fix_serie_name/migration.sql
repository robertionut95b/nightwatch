/*
  Warnings:

  - You are about to drop the `Series` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GenreToSeries` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Actor" DROP CONSTRAINT "Actor_seriesId_fkey";

-- DropForeignKey
ALTER TABLE "Director" DROP CONSTRAINT "Director_seriesId_fkey";

-- DropForeignKey
ALTER TABLE "Language" DROP CONSTRAINT "Language_seriesId_fkey";

-- DropForeignKey
ALTER TABLE "Season" DROP CONSTRAINT "Season_seriesId_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToSeries" DROP CONSTRAINT "_GenreToSeries_A_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToSeries" DROP CONSTRAINT "_GenreToSeries_B_fkey";

-- DropTable
DROP TABLE "Series";

-- DropTable
DROP TABLE "_GenreToSeries";

-- CreateTable
CREATE TABLE "Serie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "rating" TEXT NOT NULL,
    "release" TIMESTAMP(3) NOT NULL,
    "runtime" INTEGER NOT NULL,
    "plot" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "imdbRating" DOUBLE PRECISION NOT NULL,
    "totalSeasons" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Serie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GenreToSerie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Serie_title_key" ON "Serie"("title");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToSerie_AB_unique" ON "_GenreToSerie"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToSerie_B_index" ON "_GenreToSerie"("B");

-- AddForeignKey
ALTER TABLE "Director" ADD CONSTRAINT "Director_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Serie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actor" ADD CONSTRAINT "Actor_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Serie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Serie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Season" ADD CONSTRAINT "Season_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Serie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToSerie" ADD FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToSerie" ADD FOREIGN KEY ("B") REFERENCES "Serie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
