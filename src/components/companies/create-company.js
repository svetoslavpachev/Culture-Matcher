import React from "react";
import { useForm } from "react-hook-form";

import styles from "./create-company.module.scss";
export default function CreateCompany({
  setCreateCompany,
  companies,
  setCompaies,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("/api/create-company", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        setCompaies([...companies, data]);
        console.log("Company was created", data);
        setCreateCompany(false);
      })
      .catch((err) => {
        console.log("err", err);
        throw new Error(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className="header">
        <h1>Create Company</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Company name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <input
          type="text"
          placeholder="City"
          className={styles.input}
          {...register("city", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <button className={styles.input} type="submit">
          Create Company
        </button>
      </form>
    </div>
  );
}
