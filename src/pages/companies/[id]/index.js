import { prisma } from "../../../../db/prisma-client";

export default function CompanyShow({ company }) {
  return <h1>Welcome back {company.name}</h1>;
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const company = await prisma.company.findUnique({
    where: {
      id: id,
    },
  });
  console.log(company);

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
