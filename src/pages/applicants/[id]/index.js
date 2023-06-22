/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.scss";

import CultureTest from "../.././../components/culture-test/culture-test";
import ListMatches from "@/components/matches/list-matches";

export default function ApplicantShow() {
  const [testCompleted, setTestCompleted] = useState(true);
  const [applicant, setApplicant] = useState();
  const [matches, setMatches] = useState();

  const router = useRouter();

  const getApplicant = async () => {
    const res = await fetch(`/api/get-applicant-info?id=${router.query.id}`);

    const data = await res.json();
    setApplicant(data.applicant);
    setTestCompleted(data.applicant?.culture_type);
    setMatches(data.matches);
  };

  useEffect(() => {
    getApplicant();
  }, []);

  return (
    <div>
      <h1 className="header">Welcome back {applicant?.first_name}</h1>
      {applicant?.culture_type && (
        <h3 className={`header ${styles.cultureType}`}>
          Your culture type is {applicant.culture_type}
        </h3>
      )}
      {!testCompleted && (
        <CultureTest participant={applicant} getDataFromDb={getApplicant} />
      )}
      {testCompleted && <ListMatches matches={matches} route={"applicant"} />}
    </div>
  );
}
