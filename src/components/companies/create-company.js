import React from "react";
import { useForm } from "react-hook-form";
export default function CreateCompany({ setCreateCompany }) {
  const {
    register,
    handleSubmit,
    watch,
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
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <h1>Create Company</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Company name" {...register("name")} />
        <input type="text" placeholder="City" {...register("city")} />
        <input type="submit" />
      </form>
    </div>
  );
}
