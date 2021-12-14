-- DropForeignKey
ALTER TABLE "Language" DROP CONSTRAINT "Language_seriesId_fkey";

-- CreateTable
CREATE TABLE "_LanguageToSerie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LanguageToSerie_AB_unique" ON "_LanguageToSerie"("A", "B");

-- CreateIndex
CREATE INDEX "_LanguageToSerie_B_index" ON "_LanguageToSerie"("B");

-- AddForeignKey
ALTER TABLE "_LanguageToSerie" ADD FOREIGN KEY ("A") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LanguageToSerie" ADD FOREIGN KEY ("B") REFERENCES "Serie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
