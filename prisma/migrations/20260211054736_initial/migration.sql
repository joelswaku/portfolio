-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(220) NOT NULL,
    "password" VARCHAR(260) NOT NULL,
    "create_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog" (
    "b_id" SERIAL NOT NULL,
    "b_title" TEXT NOT NULL,
    "introduction" TEXT,
    "problem_statement" TEXT,
    "analysis" TEXT,
    "best_practices" TEXT,
    "conclusion" TEXT,
    "call_action" TEXT,
    "userId" UUID NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("b_id")
);

-- CreateTable
CREATE TABLE "categories" (
    "c_id" SERIAL NOT NULL,
    "c_title" TEXT NOT NULL,
    "c_description" TEXT,
    "c_t_covered" TEXT,
    "c_f_article" TEXT,
    "blogId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("c_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blog"("b_id") ON DELETE RESTRICT ON UPDATE CASCADE;
