import CreateCompany from "@/components/companies/create-company";
import { useState } from "react";
import styles from "./index.module.scss";
import Backdrop from "@/components/backdrop/backdrop";
import { prisma } from "../../../db/prisma-client";
import SearchBar from "../../components/searchbar/searchbar";
import ListCompanies from "../../components/companies/list-companies";

const Companies = ({ companies }) => {
  const [createCompany, setCreateCompany] = useState(false);
  const [comp, setComp] = useState(companies);
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <div className="header">
        <h1>Companies</h1>
      </div>
      <div className={styles.addbutton}>
        <button
          onClick={() => {
            setCreateCompany(!createCompany);
          }}
        >
          Create company
        </button>
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      <div className={styles.list}>
        <ListCompanies search={search} comp={comp} />
      </div>

      {createCompany && (
        // Backdrop is a component that will close the modal when clicked outside of it
        <div>
          <Backdrop closeModal={setCreateCompany} />
          <CreateCompany
            setCreateCompany={setCreateCompany}
            companies={comp}
            setCompaies={setComp}
          />
        </div>
      )}
    </div>
  );
};

export default Companies;

// getServersideProps
// query the db for all companies

export async function getServerSideProps() {
  try {
    const companies = await prisma.company.findMany();
    return {
      props: {
        companies,
      },
    };
  } catch (error) {
    return {
      props: {
        companies: [],
      },
    };
  }
}
