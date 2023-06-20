import { useState } from "react";
import styles from "./culture-types.module.scss";
import Backdrop from "@/components/backdrop/backdrop";
import CreateCultureType from "@/components/culture-types/create-culture-type";
import { prisma } from "../../../db/prisma-client";
import ListCultureTypes from "@/components/culture-types/list-culture-types";

// If authentication I would seprarate this route only for admins who can create culture types

const CultureTypes = ({ existingCultureTypes }) => {
  const [createCultureType, setCreateCultureType] = useState(false);
  const [cultureTypes, setCultureTypes] = useState(existingCultureTypes);

  return (
    <div className={styles.container}>
      <h1 className="header">Create culture type based on average</h1>
      <button
        onClick={() => {
          setCreateCultureType(!createCultureType);
        }}
      >
        Create culture type
      </button>

      <ListCultureTypes cultureTypes={cultureTypes} />

      {createCultureType && (
        // Backdrop is a component that will close the modal when clicked outside of it
        <div>
          <Backdrop closeModal={setCreateCultureType} />
          <CreateCultureType
            setCreateCultureType={setCreateCultureType}
            setCultureTypes={setCultureTypes}
            cultureTypes={cultureTypes}
          />
        </div>
      )}
    </div>
  );
};

export default CultureTypes;

// This function will run on the server side
// It will fetch all the existing culture types
// And pass them as props to the component

export async function getServerSideProps(context) {
  try {
    const existingCultureTypes = await prisma.culture_Type.findMany();
    console.log("existingCultureTypes", existingCultureTypes);
    return {
      props: {
        existingCultureTypes,
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      props: {
        existingCultureTypes: [],
      },
    };
  }
}
