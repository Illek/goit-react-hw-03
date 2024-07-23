import s from "./Feedback.module.css";
import clsx from "clsx";

const Feedback = ({ feedbackGrades, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={clsx(s.listFeedback)}>
      <li className={clsx(s.itemFeedback)}>
        <p className={clsx(s.feedbackRow)}>
          <span className={clsx(s.label)}>Good:</span>
          <span className={clsx(s.valueFeedback)}>{feedbackGrades.good}</span>
        </p>
      </li>
      <li className={clsx(s.itemFeedback)}>
        <p className={clsx(s.feedbackRow)}>
          <span className={clsx(s.label)}>Neutral:</span>
          <span className={clsx(s.valueFeedback)}>
            {feedbackGrades.neutral}
          </span>
        </p>
      </li>
      <li className={clsx(s.itemFeedback)}>
        <p className={clsx(s.feedbackRow)}>
          <span className={clsx(s.label)}>Bad:</span>
          <span className={clsx(s.valueFeedback)}>{feedbackGrades.bad}</span>
        </p>
      </li>
      <li className={clsx(s.itemFeedback)}>
        <p className={clsx(s.feedbackRow)}>
          <span className={clsx(s.label)}>Total:</span>
          <span className={clsx(s.valueFeedback)}>{totalFeedback}</span>
        </p>
      </li>
      <li className={clsx(s.itemFeedback)}>
        <p className={clsx(s.feedbackRow)}>
          <span className={clsx(s.label)}>Positive:</span>
          <span
            className={clsx(s.valueFeedback, s.valueSize, s.valueFeedbackLc)}
          >
            {positiveFeedback ? positiveFeedback : "0"}%
          </span>
        </p>
      </li>
    </ul>
  );
};
export default Feedback;
