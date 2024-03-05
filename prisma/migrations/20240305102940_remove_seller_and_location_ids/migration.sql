/*
  Warnings:

  - You are about to drop the column `locationId` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `sellerId` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "locationId",
DROP COLUMN "sellerId";
