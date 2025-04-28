/*
  Warnings:

  - Added the required column `deliveryPrice` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryTime` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `distance` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "deliveryPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "deliveryTime" INTEGER NOT NULL,
ADD COLUMN     "distance" DOUBLE PRECISION NOT NULL;
