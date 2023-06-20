import React from "react";
import { useForm } from "react-hook-form";

import styles from "./create-applicant.module.scss";
export default function CreateApplicant({ setCreateApplicant, appl, setAppl }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await fetch("/api/create-applicant", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        setAppl([...appl, data]);
        console.log("Applicant was created", data);
        setCreateApplicant(false);
      })
      .catch((err) => {
        console.log("err", err);
        throw new Error(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className="header">
        <h1>Create Applicant</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="First name"
          {...register("first_name", { required: true })}
        />
        {errors.first_name && <span>This field is required</span>}
        <input
          className={styles.input}
          type="text"
          placeholder="Last name"
          {...register("last_name", { required: true })}
        />
        {errors.last_name && <span>This field is required</span>}

        <button className={styles.input} type="submit">
          Create Applicant
        </button>
      </form>
    </div>
  );
}
