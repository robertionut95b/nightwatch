/*
  Warnings:

  - A unique constraint covering the columns `[seriesId,index]` on the table `Season` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Season_seriesId_index_key" ON "Season"("seriesId", "index");
