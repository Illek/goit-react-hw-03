import clsx from "clsx";
import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={clsx(s.buttonWrapper, s.elPopOutLight)}>
      <button
        className={clsx(s.btn, s.btnGreen)}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>

      <button
        className={clsx(s.btn, s.btnRed)}
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>

      <button
        className={clsx(s.btn, s.btnNeutral)}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>

      <button
        className={clsx(
          totalFeedback > 0 ? s.visible : s.invisible,
          s.btn,
          s.btnReset
        )}
        type="button"
        onClick={resetFeedback}
      >
        Reset
      </button>
    </div>
  );
};

export default Options;
