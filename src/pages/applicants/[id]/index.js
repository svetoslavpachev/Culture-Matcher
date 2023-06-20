import { prisma } from "../../../../db/prisma-client";
import { useState } from "react";

import CultureTest from "../.././../components/culture-test/culture-test";
export default function ApplicantShow({ applicant }) {
  // check if test is completed and set state
  const [testCompleted, setTestCompleted] = useState(applicant.culture_type);

  return (
    <div>
      <h1 className="header">Welcome back {applicant?.first_name}</h1>
      {!testCompleted && <CultureTest participant={applicant} />}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const applicant = await prisma.applicant.findUnique({
    where: {
      id: id,
    },
  });

  try {
    return {
      props: {
        applicant,
      },
    };
  } catch (error) {
    return {
      props: {
        applicant: {},
      },
    };
  }
}
