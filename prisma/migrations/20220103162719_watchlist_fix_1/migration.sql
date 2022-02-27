/*
  Warnings:

  - You are about to drop the column `movieWatchlistId` on the `Watchlist` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Watchlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Watchlist" DROP COLUMN "movieWatchlistId",
DROP COLUMN "type";

-- DropEnum
DROP TYPE "WatchlistType";
