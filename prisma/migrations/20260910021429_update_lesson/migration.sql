/*
  Warnings:

  - You are about to drop the column `startTeime` on the `Lesson` table. All the data in the column will be lost.
  - Added the required column `startTime` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "startTeime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
