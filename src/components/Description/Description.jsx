import s from "./Description.module.css";
import clsx from "clsx";

const Description = () => {
  return (
    <div className={clsx()}>
      <h1 className={clsx(s.title)}>Sip Happens Café</h1>
      <p className={clsx(s.text, s.elPopInShadowMedium)}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
