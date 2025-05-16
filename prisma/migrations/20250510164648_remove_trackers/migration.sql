/*
  Warnings:

  - You are about to drop the `analytics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `onboarding_data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "analytics" DROP CONSTRAINT "analytics_userId_fkey";

-- DropForeignKey
ALTER TABLE "onboarding_data" DROP CONSTRAINT "onboarding_data_userId_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "username" DROP NOT NULL;

-- DropTable
DROP TABLE "analytics";

-- DropTable
DROP TABLE "onboarding_data";
