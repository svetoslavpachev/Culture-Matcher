import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./culture-test-form.module.scss";
import { useRouter } from "next/router";

export default function CultureTestForm({ setStartTest, company }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  // Pagination on the form
  const formQuestions = [1, 2, 3, 4, 5, 6, 7, 8];
  const [page, setPage] = useState(0);

  // Get the type from the url
  const [type] = useState(
    router.asPath.includes("/applicant") ? "applicant" : undefined
  );

  // Get the data from the form
  const [formData, setFormData] = useState({
    answer_one: 1,
    answer_two: 1,
    answer_three: 1,
    answer_four: 1,
    answer_five: 1,
    answer_six: 1,
    answer_seven: 1,
    answer_eight: 1,
  });

  const calculateCultureType = () => {
    const total = Object.values(formData).reduce((acc, curr) => {
      return acc + parseInt(curr);
    }, 0);
    const average = total / Object.values(formData).length;
    return <p>{average}</p>;
    // get all the culture types and compare the average with the culture types
    // return the culture type with the smallest difference
    // update the company with the culture type
    // update the applicant with the culture type
  };

  // Render the questions based on the type
  const renderQuestions = (type) => {
    switch (page) {
      case 0:
        return (
          <div>
            <p>
              {type === "applicant"
                ? "At work, I usually solve problems"
                : "Employees should be cool"}{" "}
            </p>
            <input
              type="range"
              min={1}
              max={5}
              {...register("answer_one", { required: true })}
              value={formData.answer_one}
              onChange={(e) => {
                setFormData({ ...formData, answer_one: e.target.value });
              }}
            />
            {errors.answer_one && <span>This field is required</span>}
          </div>
        );
      case 1:
        return (
          <div>
            <p>
              {type === "applicant"
                ? "When selecting a job, salary is for me the most important"
                : "Suit is required at work"}
            </p>
            <input
              type="range"
              min={1}
              max={5}
              {...register("answer_two", { required: true })}
              value={formData.answer_two}
              onChange={(e) => {
                setFormData({ ...formData, answer_two: e.target.value });
              }}
            />
            {errors.answer_two && <span>This field is required</span>}
          </div>
        );
      case 2:
        return (
          <div>
            <p>
              {type === "applicant"
                ? "At my job, I prefer to have fun"
                : "Outsiders are not welcome at work"}
            </p>
            <input
              type="range"
              min={1}
              max={5}
              {...register("answer_three", { required: true })}
              value={formData.answer_three}
              onChange={(e) => {
                setFormData({ ...formData, answer_three: e.target.value });
              }}
            />
            {errors.answer_three && <span>This field is required</span>}
          </div>
        );
      case 3:
        return (
          <div>
            <p>
              {type === "applicant"
                ? "To my birthday party, colleagues are invited"
                : "Hybrid work schedule is preferable"}
            </p>
            <input
              type="range"
              min={1}
              max={5}
              {...register("answer_four", { required: true })}
              value={formData.answer_four}
              onChange={(e) => {
                setFormData({ ...formData, answer_four: e.target.value });
              }}
            />
            {errors.answer_four && <span>This field is required</span>}
          </div>
        );
      case 4:
        return (
          <div>
            <p>
              {type === "applicant"
                ? "My ideal work environment is quiet"
                : "Outside events are offered to employees"}
            </p>
            <input
              type="range"
              min={1}
              max={5}
              {...register("answer_five", { required: true })}
              value={formData.answer_five}
              onChange={(e) => {
                setFormData({ ...formData, answer_five: e.target.value });
              }}
            />
            {errors.answer_five && <span>This field is required</span>}
          </div>
        );
      case 5:
        return (
          <div>
            <p>
              {type === "applicant"
                ? "My ideal work environment is quiet"
                : "Equipment is provided from the company"}
            </p>
            <input
              type="range"
              min={1}
              max={5}
              {...register("answer_six", { required: true })}
              value={formData.answer_six}
              onChange={(e) => {
                setFormData({ ...formData, answer_six: e.target.value });
              }}
            />
            {errors.answer_six && <span>This field is required</span>}
          </div>
        );
      case 6:
        return (
          <div>
            <p>
              {type === "applicant"
                ? "At work I prefer to wear jeans"
                : "Travel expenses are covered by the company"}
            </p>
            <input
              type="range"
              min={1}
              max={5}
              {...register("answer_seven", { required: true })}
              value={formData.answer_seven}
              onChange={(e) => {
                setFormData({ ...formData, answer_seven: e.target.value });
              }}
            />
            {errors.answer_seven && <span>This field is required</span>}
          </div>
        );
      case 7:
        return (
          <div>
            <p>
              {type === "applicant"
                ? "At work I prefer to wear jeans"
                : "Mandatory stand-up meetings every week"}
            </p>
            <input
              type="range"
              min={1}
              max={5}
              {...register("answer_eight", { required: true })}
              value={formData.answer_eight}
              onChange={(e) => {
                setFormData({ ...formData, answer_eight: e.target.value });
              }}
            />
            {errors.answer_eight && <span>This field is required</span>}
          </div>
        );

      default:
    }
  };

  const onSubmit = (data) => {};

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>
            {page + 1}/ {formQuestions.length}
          </p>
        </div>
        {/*This function renders the form questions */}
        {renderQuestions(type)}
        {/*This function renders the form questions */}

        {page !== 0 && (
          <button
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
        )}
        <button
          onClick={() => {
            if (page === formQuestions.length - 1) {
              console.log(formData);

              calculateCultureType();
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === formQuestions.length - 1 ? "Submit" : "Next"}
        </button>
        {page === formQuestions.length - 1 && calculateCultureType()}
      </form>
    </div>
  );
}
