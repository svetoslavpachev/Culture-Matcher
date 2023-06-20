import { prisma } from "../../../db/prisma-client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { first_name, last_name } = req.body;

    const applicant = await prisma.applicant.create({
      data: {
        first_name,
        last_name,
      },
    });
    res.status(200).json(applicant);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}
