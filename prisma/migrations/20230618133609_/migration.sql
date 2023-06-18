-- CreateTable
CREATE TABLE "Culture Type" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "lower_end" INTEGER,
    "upper_end" INTEGER,

    CONSTRAINT "Culture Type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Culture Type_lower_end_key" ON "Culture Type"("lower_end");

-- CreateIndex
CREATE UNIQUE INDEX "Culture Type_upper_end_key" ON "Culture Type"("upper_end");
