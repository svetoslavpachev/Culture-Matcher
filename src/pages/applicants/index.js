import { prisma } from "../../../db/prisma-client";

import styles from "./index.module.scss";
import { useState } from "react";

import Backdrop from "@/components/backdrop/backdrop";
import SearchBar from "../../components/searchbar/searchbar";
import ListApplicants from "../../components/applicants/list-applicants";
import CreateApplicant from "@/components/applicants/create-applicant";

const Applicant = ({ applicants }) => {
  const [createApplicant, setCreateApplicant] = useState(false);
  const [appl, setAppl] = useState(applicants);
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <div className="header">
        <h1>Applicants</h1>
      </div>
      <div className={styles.addbutton}>
        <button
          onClick={() => {
            setCreateApplicant(!createApplicant);
          }}
        >
          Create applicant
        </button>
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      <div className={styles.list}>
        <ListApplicants search={search} appl={appl} />
      </div>

      {createApplicant && (
        // Backdrop is a component that will close the modal when clicked outside of it
        <>
          <Backdrop closeModal={setCreateApplicant} />
          <CreateApplicant
            setCreateApplicant={setCreateApplicant}
            appl={appl}
            setAppl={setAppl}
          />
        </>
      )}
    </div>
  );
};

export default Applicant;

// getServersideProps
// query the db for all companies

export async function getServerSideProps() {
  try {
    const applicants = await prisma.applicant.findMany();
    return {
      props: {
        applicants,
      },
    };
  } catch (error) {
    return {
      props: {
        applicants: [],
      },
    };
  }
}
