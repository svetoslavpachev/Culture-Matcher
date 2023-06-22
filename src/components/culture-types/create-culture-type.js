import styles from "./create-culture-type.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function CreateCultureType({
  setCreateCultureType,
  cultureTypes,
  setCultureTypes,
}) {
  const [average, setAverage] = useState(2.5);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
          setCultureTypes([...cultureTypes, data]);
          console.log("Culture type created", data);
          setCreateCultureType(false);
        } else if (res.status === 400) {
          const data = await res.json();
          alert(`${data.message}`);
          reset();
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
      <div className={`header ${styles.createHeader}`}>
        <h1>Create Type</h1>
      </div>
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
            {average && (
              <label htmlFor="average">
                Average score for this culture type is{" "}
                {parseFloat(average).toFixed(2)}
              </label>
            )}
          </div>
          <span>1</span>
          <input
            id="average"
            type="range"
            min={1}
            max={5}
            defaultValue={2.5}
            step={0.001}
            {...register("average", { required: true })}
            onChange={(e) => {
              setAverage(e.target.value);
            }}
          />
          <span>5</span>
        </div>

        <button className={`${styles.btnSubmit}`} type="submit">
          Create Type
        </button>
      </form>
    </div>
  );
}
