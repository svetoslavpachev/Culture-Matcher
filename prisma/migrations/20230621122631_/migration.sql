-- CreateTable
CREATE TABLE "Culture_Type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lower_end" DOUBLE PRECISION NOT NULL,
    "upper_end" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Culture_Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "culture_type" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Applicant" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "culture_type" TEXT,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Culture_Test" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "respondent_id" TEXT NOT NULL,
    "answer_one" INTEGER NOT NULL,
    "answer_two" INTEGER NOT NULL,
    "answer_three" INTEGER NOT NULL,
    "answer_four" INTEGER NOT NULL,
    "answer_five" INTEGER NOT NULL,
    "answer_six" INTEGER NOT NULL,
    "answer_seven" INTEGER NOT NULL,
    "answer_eight" INTEGER NOT NULL,
    "result" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Culture_Test_pkey" PRIMARY KEY ("id")
);
