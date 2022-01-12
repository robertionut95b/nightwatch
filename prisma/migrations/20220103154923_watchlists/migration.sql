/*
  Warnings:

  - Added the required column `updatedAt` to the `Episode` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "WatchlistType" AS ENUM ('MOVIE', 'TVSHOW');

-- AlterTable
ALTER TABLE "Episode" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Watchlist" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL,
    "type" "WatchlistType" NOT NULL,
    "movieWatchlistId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MoviesWatchlist" (
    "id" INTEGER NOT NULL,
    "watchlistId" INTEGER NOT NULL,

    CONSTRAINT "MoviesWatchlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchlistedMovie" (
    "movieId" INTEGER NOT NULL,
    "watchlistId" INTEGER NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "seen" BOOLEAN NOT NULL DEFAULT false,
    "seenAt" TIMESTAMP(3),

    CONSTRAINT "WatchlistedMovie_pkey" PRIMARY KEY ("movieId","watchlistId")
);

-- CreateTable
CREATE TABLE "SeriesWatchlist" (
    "id" INTEGER NOT NULL,
    "watchlistId" INTEGER NOT NULL,

    CONSTRAINT "SeriesWatchlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchlistedSerie" (
    "serieId" INTEGER NOT NULL,
    "watchlistId" INTEGER NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "seen" BOOLEAN NOT NULL DEFAULT false,
    "seenAt" TIMESTAMP(3),

    CONSTRAINT "WatchlistedSerie_pkey" PRIMARY KEY ("serieId","watchlistId")
);

-- CreateTable
CREATE TABLE "EpisodesWatchlist" (
    "id" INTEGER NOT NULL,
    "watchlistId" INTEGER NOT NULL,

    CONSTRAINT "EpisodesWatchlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchlistedEpisode" (
    "episodeId" INTEGER NOT NULL,
    "watchlistId" INTEGER NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "seen" BOOLEAN NOT NULL DEFAULT false,
    "seenAt" TIMESTAMP(3),

    CONSTRAINT "WatchlistedEpisode_pkey" PRIMARY KEY ("episodeId","watchlistId")
);

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoviesWatchlist" ADD CONSTRAINT "MoviesWatchlist_watchlistId_fkey" FOREIGN KEY ("watchlistId") REFERENCES "Watchlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistedMovie" ADD CONSTRAINT "WatchlistedMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistedMovie" ADD CONSTRAINT "WatchlistedMovie_watchlistId_fkey" FOREIGN KEY ("watchlistId") REFERENCES "MoviesWatchlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeriesWatchlist" ADD CONSTRAINT "SeriesWatchlist_watchlistId_fkey" FOREIGN KEY ("watchlistId") REFERENCES "Watchlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistedSerie" ADD CONSTRAINT "WatchlistedSerie_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Serie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistedSerie" ADD CONSTRAINT "WatchlistedSerie_watchlistId_fkey" FOREIGN KEY ("watchlistId") REFERENCES "SeriesWatchlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EpisodesWatchlist" ADD CONSTRAINT "EpisodesWatchlist_watchlistId_fkey" FOREIGN KEY ("watchlistId") REFERENCES "Watchlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistedEpisode" ADD CONSTRAINT "WatchlistedEpisode_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "Episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistedEpisode" ADD CONSTRAINT "WatchlistedEpisode_watchlistId_fkey" FOREIGN KEY ("watchlistId") REFERENCES "EpisodesWatchlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
