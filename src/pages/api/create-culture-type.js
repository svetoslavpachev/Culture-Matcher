import { prisma } from "../../../db/prisma-client";
import getLowerAndUpperEnd from "../../../lib/average-score";

// Function to validate culture type
function validateCultureType(cultureType, existingCultureTypes) {
  for (let i = 0; i < existingCultureTypes.length; i++) {
    let existingType = existingCultureTypes[i];
    if (
      (cultureType.lower_end >= existingType.lower_end &&
        cultureType.lower_end <= existingType.upper_end) ||
      (cultureType.upper_end >= existingType.lower_end &&
        cultureType.upper_end <= existingType.upper_end)
    ) {
      console.log(
        "Invalid! Culture Type " +
          cultureType.name +
          " overlaps with Culture Type " +
          existingType.name
      );
      return false;
    }
  }
  return true;
  // Validation passed
}
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { name, average } = req.body;

    // Function to get lower and upper end
    // precision of 2 decimal places for lower and upper end
    // e.g. 0.01, 0.02, 0.03, 0.04, 0.05

    const { lower_end, upper_end } = getLowerAndUpperEnd(average);

    const existingCultureTypes = await prisma.culture_Type.findMany();
    const cultureType = {
      name,
      lower_end: parseFloat(lower_end.toFixed(2)),
      upper_end: parseFloat(upper_end.toFixed(2)),
    };

    // Check if culture type is valid
    if (validateCultureType(cultureType, existingCultureTypes) === false) {
      res.status(400).json({ message: "Invalid culture type" });
      return;
    } else if (
      // Check if there are existing culture types
      existingCultureTypes &&
      validateCultureType(cultureType, existingCultureTypes) === true
    ) {
      console.log("Valid culture type");
      const cultureTypeReturned = await prisma.culture_Type.create({
        data: {
          name,
          lower_end: parseFloat(lower_end.toFixed(2)),
          upper_end: parseFloat(upper_end.toFixed(2)),
        },
      });
      res.status(200).json(cultureTypeReturned);
    } else {
      // If there are no existing culture types
      // Create culture type
      const cultureTypeReturned = await prisma.culture_Type.create({
        data: {
          name,
          lower_end: parseFloat(lower_end.toFixed(2)),
          upper_end: parseFloat(upper_end.toFixed(2)),
        },
      });
      res.status(200).json(cultureTypeReturned);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}
