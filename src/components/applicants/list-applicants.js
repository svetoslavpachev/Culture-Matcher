import Link from "next/link";
export default function ListApplicants({ appl, search }) {
  return (
    <div>
      {appl.length > 0 &&
        appl
          .filter((applicant) => {
            if (
              applicant.first_name
                ?.toLowerCase()
                .includes(search?.toLowerCase()) ||
              applicant.last_name?.toLowerCase().includes(search?.toLowerCase())
            ) {
              return applicant;
            } else if (search === "") {
              return applicant;
            }
          })
          .map((applicant) => {
            return (
              <ul key={applicant.id}>
                <li className="list-item">
                  <Link href={`applicants/${applicant.id}`}>
                    {applicant?.first_name + " " + applicant?.last_name}
                  </Link>
                </li>
              </ul>
            );
          })}
    </div>
  );
}
