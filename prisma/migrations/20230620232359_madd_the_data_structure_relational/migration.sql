/*
  Warnings:

  - You are about to drop the column `culture_type` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `culture_type` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `respondent_id` on the `Culture_Test` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[culture_test_id]` on the table `Applicant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[culture_test_id]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `culture_test_id` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `culture_type_id` to the `Applicant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `culture_test_id` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `culture_type_id` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Applicant" DROP COLUMN "culture_type",
ADD COLUMN     "culture_test_id" TEXT NOT NULL,
ADD COLUMN     "culture_type_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "culture_type",
ADD COLUMN     "culture_test_id" TEXT NOT NULL,
ADD COLUMN     "culture_type_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Culture_Test" DROP COLUMN "respondent_id";

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_culture_test_id_key" ON "Applicant"("culture_test_id");

-- CreateIndex
CREATE UNIQUE INDEX "Company_culture_test_id_key" ON "Company"("culture_test_id");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_culture_type_id_fkey" FOREIGN KEY ("culture_type_id") REFERENCES "Culture_Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_culture_test_id_fkey" FOREIGN KEY ("culture_test_id") REFERENCES "Culture_Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_culture_type_id_fkey" FOREIGN KEY ("culture_type_id") REFERENCES "Culture_Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_culture_test_id_fkey" FOREIGN KEY ("culture_test_id") REFERENCES "Culture_Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
