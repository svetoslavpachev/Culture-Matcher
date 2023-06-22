import { prisma } from "../../../db/prisma-client";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { id } = req.query;
    let matches;

    const applicant = await prisma.applicant.findUnique({
      where: {
        id: id,
      },
    });

    if (applicant?.culture_type) {
      matches = await prisma.company.findMany({
        where: {
          culture_type: applicant.culture_type,
        },
        select: {
          city: true,
          name: true,
        },
      });
    }

    res.status(200).json({ applicant, matches });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}
