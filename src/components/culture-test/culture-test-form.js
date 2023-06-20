import { useState } from "react";
import styles from "./culture-test-form.module.scss";
import { useRouter } from "next/router";

export default function CultureTestForm({ setStartTest, participant }) {
  const router = useRouter();
  let average;

  const [showResults, setShowResults] = useState(false);

  // Pagination on the form
  const formQuestions = [1, 2, 3, 4, 5, 6, 7, 8];
  const [page, setPage] = useState(0);

  // Get the type from the url
  const [type] = useState(
    router.asPath.includes("/applicant") ? "applicant" : "company"
  );

  // Get the data from the form
  const [formData, setFormData] = useState({
    answer_one: 2,
    answer_two: 2,
    answer_three: 2,
    answer_four: 2,
    answer_five: 2,
    answer_six: 2,
    answer_seven: 2,
    answer_eight: 2,
  });

  // Submit the form
  const submitForm = async (data) => {
    data.participant = participant.id;
    data.average = average;
    data.type = type;
    console.log(data);

    // await fetch("/api/create-culture-test", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  };

  const calculateCultureType = () => {
    // Calculate the average
    const total = Object.values(formData).reduce((acc, curr) => {
      return acc + parseInt(curr);
    }, 0);
    average = total / Object.values(formData).length;

    // Calculate the average

    return (
      <div>
        <p>Your average score was {average}</p>
        <button
          onClick={(e) => {
            submitForm(formData);
          }}
        >
          Save Results
        </button>
        <button
          onClick={(e) => {
            setShowResults(false);
            setFormData((curr) => {
              return {
                ...curr,
                answer_one: 2,
                answer_two: 2,
                answer_three: 2,
                answer_four: 2,
                answer_five: 2,
                answer_six: 2,
                answer_seven: 2,
                answer_eight: 2,
              };
            });
            setPage(0);
          }}
        >
          Start Over
        </button>
      </div>
    );
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
              value={formData.answer_one}
              onChange={(e) => {
                setFormData({ ...formData, answer_one: e.target.value });
              }}
            />
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
              value={formData.answer_two}
              onChange={(e) => {
                setFormData({ ...formData, answer_two: e.target.value });
              }}
            />
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
              value={formData.answer_three}
              onChange={(e) => {
                setFormData({ ...formData, answer_three: e.target.value });
              }}
            />
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
              value={formData.answer_four}
              onChange={(e) => {
                setFormData({ ...formData, answer_four: e.target.value });
              }}
            />
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
              value={formData.answer_five}
              onChange={(e) => {
                setFormData({ ...formData, answer_five: e.target.value });
              }}
            />
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
              value={formData.answer_six}
              onChange={(e) => {
                setFormData({ ...formData, answer_six: e.target.value });
              }}
            />
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
              value={formData.answer_seven}
              onChange={(e) => {
                setFormData({ ...formData, answer_seven: e.target.value });
              }}
            />
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
              value={formData.answer_eight}
              onChange={(e) => {
                setFormData({ ...formData, answer_eight: e.target.value });
              }}
            />
          </div>
        );

      default:
    }
  };

  return (
    <div className={styles.container}>
      {!showResults && (
        <div>
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
              onClick={(e) => {
                e.preventDefault;
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();

              if (page === formQuestions.length - 1) {
                console.log(formData);
                setShowResults(true);
                calculateCultureType();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === formQuestions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      )}
      {showResults && calculateCultureType()}
    </div>
  );
}
