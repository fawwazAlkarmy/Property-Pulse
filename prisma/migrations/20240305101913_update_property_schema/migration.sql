/*
  Warnings:

  - You are about to drop the column `rateId` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Seller` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `location` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rates` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seller` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_rateId_fkey";

-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_sellerId_fkey";

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "rateId",
ADD COLUMN     "location" JSONB NOT NULL,
ADD COLUMN     "rates" JSONB NOT NULL,
ADD COLUMN     "seller" JSONB NOT NULL;

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "Rate";

-- DropTable
DROP TABLE "Seller";
