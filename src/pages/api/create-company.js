import { prisma } from "../../../db/prisma-client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { name, city } = req.body;

    const company = await prisma.company.create({
      data: {
        name: name,
        city: city,
      },
    });

    res.status(200).json(company);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}
