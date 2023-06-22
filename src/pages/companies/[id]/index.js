/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.scss";

import CultureTest from "../.././../components/culture-test/culture-test";
import ListMatches from "@/components/matches/list-matches";

export default function CompanyShow() {
  const [testCompleted, setTestCompleted] = useState(true);
  const [company, setCompany] = useState();
  const [matches, setMatches] = useState();
  const router = useRouter();

  const getCompanyInfo = async () => {
    const res = await fetch(`/api/get-company-info?id=${router.query.id}`);

    const data = await res.json();
    setCompany(data.company);
    setTestCompleted(data.company?.culture_type);
    setMatches(data.matches);
  };

  useEffect(() => {
    getCompanyInfo();
  }, []);

  return (
    <div>
      <h1 className="header">Welcome back {company?.name}</h1>
      {company?.culture_type && (
        <h3 className={`header ${styles.cultureType}`}>
          Your culture type is {company.culture_type}
        </h3>
      )}
      {!testCompleted && (
        <CultureTest getDataFromDb={getCompanyInfo} participant={company} />
      )}
      {testCompleted && <ListMatches matches={matches} route={"company"} />}
    </div>
  );
}
