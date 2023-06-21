import { prisma } from "../../../db/prisma-client";
import generateName from "../../../lib/random-name";
import getLowerAndUpperEnd from "../../../lib/average-score";

// Function to validate culture type

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const {
      answer_eight,
      answer_seven,
      answer_six,
      answer_five,
      answer_four,
      answer_three,
      answer_two,
      answer_one,
      average,
      participant,
      type,
    } = req.body;

    // Function to get lower and upper end
    // precision of 2 decimal places for lower and upper end
    // e.g. 0.01, 0.02, 0.03, 0.04, 0.05
    const { lower_end, upper_end } = getLowerAndUpperEnd(average);

    const test = await prisma.culture_Test.create({
      data: {
        answer_eight: parseInt(answer_eight),
        answer_seven: parseInt(answer_seven),
        answer_six: parseInt(answer_six),
        answer_five: parseInt(answer_five),
        answer_four: parseInt(answer_four),
        answer_three: parseInt(answer_three),
        answer_two: parseInt(answer_two),
        answer_one: parseInt(answer_one),
        result: average,
        respondent_id: participant,
        type,
      },
    });
    let cultureType;
    let respondent;

    // query the DB to find the culture type based on the average score

    cultureType = await prisma.culture_Type.findFirst({
      where: {
        AND: [
          { lower_end: { gte: lower_end } },
          { upper_end: { lte: upper_end } },
        ],
      },
    });

    if (!cultureType) {
      // Check if there is a culture type close to the average score up to the second decimal point for even better match
      // and if not creates new culture type with upper and lower and based on the average of the result
      // in this case the match would be even more precise.

      cultureType = await prisma.culture_Type.create({
        data: {
          name: generateName(), // just a function that creates random names
          lower_end: parseFloat(lower_end.toFixed(2)),
          upper_end: parseFloat(upper_end.toFixed(2)),
        },
      });
    }

    if (type === "applicant") {
      // Updates the respondent with the newly created culture type
      // and check if it is applicant or company who submited the test

      respondent = await prisma.applicant.update({
        where: {
          id: participant,
        },
        data: {
          culture_type: cultureType.name,
        },
      });
    } else {
      respondent = await prisma.company.update({
        where: {
          id: participant,
        },
        data: {
          culture_type: cultureType.name,
        },
      });
    }

    res.status(200).json({ message: "The test was submited" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
}
