import CreateCompany from "@/components/companies/create-company";
import { useState } from "react";

const Companies = (props) => {
  const [createCompany, setCreateCompany] = useState(false);

  return (
    <div>
      <div>
        <h1>Companies</h1>
      </div>
      <div>
        <a
          onClick={() => {
            setCreateCompany(!createCompany);
          }}
        >
          Create company
        </a>
      </div>
      {createCompany && <CreateCompany setCreateCompany={setCreateCompany} />}
    </div>
  );
};

export default Companies;
