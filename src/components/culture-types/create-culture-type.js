import styles from "./create-culture-type.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function CreateCultureType({
  setCreateCultureType,
  cultureTypes,
  setCultureTypes,
}) {
  const [average, setAverage] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await fetch("/api/create-culture-type", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (res.status === 200) {
          const data = await res.json();
          console.log("data", data);
          setCultureTypes([...cultureTypes, data]);
          console.log("Culture type created", data);
          setCreateCultureType(false);
        } else if (res.status === 400) {
          alert("Invalid culture type");
          console.log("Invalid culture type");
        }
      })
      .catch((err) => {
        console.log("err", err);
        throw new Error(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className="header"></div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Culture type name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <div>
          <div>
            <label htmlFor="average">
              Average score for this culture type{" "}
              {average && parseFloat(average).toFixed(2)}
            </label>
          </div>
          <span>1</span>
          <input
            id="average"
            type="range"
            min={1}
            max={5}
            defaultValue={2.5}
            step={0.0001}
            {...register("average", { required: true })}
            onChange={(e) => {
              setAverage(e.target.value);
            }}
          />

          <span>5</span>
        </div>

        <button className={styles.input} type="submit">
          Create type
        </button>
      </form>
    </div>
  );
}
