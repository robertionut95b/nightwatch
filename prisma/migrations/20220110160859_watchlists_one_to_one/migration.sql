/*
  Warnings:

  - A unique constraint covering the columns `[watchlistId]` on the table `EpisodesWatchlist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[watchlistId]` on the table `MoviesWatchlist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[watchlistId]` on the table `SeriesWatchlist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EpisodesWatchlist_watchlistId_key" ON "EpisodesWatchlist"("watchlistId");

-- CreateIndex
CREATE UNIQUE INDEX "MoviesWatchlist_watchlistId_key" ON "MoviesWatchlist"("watchlistId");

-- CreateIndex
CREATE UNIQUE INDEX "SeriesWatchlist_watchlistId_key" ON "SeriesWatchlist"("watchlistId");
