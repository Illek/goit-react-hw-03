import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import { useState, useEffect } from "react";
import css from "./App.module.css";
import clsx from "clsx";
import Notification from "./Notification/Notification";

const App = () => {
  const [feedbackGrades, setFeedbackGrades] = useState(() => {
    // good: 0,
    // neutral: 0,
    // bad: 0,
    const savedGrades = JSON.parse(
      window.localStorage.getItem("feedbackGrades")
    );
    if (savedGrades) {
      return savedGrades;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem(
      "feedbackGrades",
      JSON.stringify(feedbackGrades)
    );
  }, [feedbackGrades]);

  // Update current feedback state
  const updateFeedback = (feedbackType) => {
    setFeedbackGrades({
      ...feedbackGrades,
      [feedbackType]: feedbackGrades[feedbackType] + 1,
    });
    console.log(feedbackGrades[feedbackType]);
  };

  // Total summary feedback
  const totalFeedback =
    feedbackGrades["good"] + feedbackGrades["neutral"] + feedbackGrades["bad"];

  // Positive feedback coefficient
  const positiveFeedback =
    totalFeedback > 0
      ? Math.round((feedbackGrades["good"] / totalFeedback) * 100)
      : 0;
  console.log(positiveFeedback); //***! Потом убрать !***//

  const resetFeedback = () => {
    setFeedbackGrades({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={clsx(css.mainWrapper)}>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback ? (
        <Feedback
          feedbackGrades={feedbackGrades}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
