import { prisma } from "../../../db/prisma-client";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { id } = req.query;
    let matches;

    const company = await prisma.company.findUnique({
      where: {
        id: id,
      },
    });

    if (company.culture_type) {
      matches = await prisma.applicant.findMany({
        where: {
          culture_type: company.culture_type,
        },
        select: {
          first_name: true,
          last_name: true,
        },
      });
    }

    // console.log("company", company);
    res.status(200).json({ company, matches });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}
