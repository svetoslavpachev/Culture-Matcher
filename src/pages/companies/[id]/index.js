import { prisma } from "../../../../db/prisma-client";
import { useState } from "react";

import CultureTest from "../.././../components/culture-test/culture-test";
export default function CompanyShow({ company }) {
  // check if test is completed and set state
  const [testCompleted, setTestCompleted] = useState(company.cultureType);

  return (
    <div>
      <h1 className="header">Welcome back {company?.name}</h1>
      {!testCompleted && <CultureTest company={company} />}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const company = await prisma.company.findUnique({
    where: {
      id: id,
    },
  });

  try {
    return {
      props: {
        company,
      },
    };
  } catch (error) {
    return {
      props: {
        company: {},
      },
    };
  }
}
