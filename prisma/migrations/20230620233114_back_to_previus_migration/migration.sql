/*
  Warnings:

  - You are about to drop the column `culture_test_id` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `culture_type_id` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `culture_test_id` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `culture_type_id` on the `Company` table. All the data in the column will be lost.
  - Added the required column `respondent_id` to the `Culture_Test` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Applicant" DROP CONSTRAINT "Applicant_culture_test_id_fkey";

-- DropForeignKey
ALTER TABLE "Applicant" DROP CONSTRAINT "Applicant_culture_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_culture_test_id_fkey";

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_culture_type_id_fkey";

-- DropIndex
DROP INDEX "Applicant_culture_test_id_key";

-- DropIndex
DROP INDEX "Company_culture_test_id_key";

-- AlterTable
ALTER TABLE "Applicant" DROP COLUMN "culture_test_id",
DROP COLUMN "culture_type_id",
ADD COLUMN     "culture_type" TEXT;

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "culture_test_id",
DROP COLUMN "culture_type_id",
ADD COLUMN     "culture_type" TEXT;

-- AlterTable
ALTER TABLE "Culture_Test" ADD COLUMN     "respondent_id" TEXT NOT NULL;
