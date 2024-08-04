import s from "./ResetButton.module.css";

const ResetButton = ({ reset }) => {
  return (
    <div className={s.compWrap}>
      <h1>Phonebook</h1>
      <div className={s.wrapper}>
        <p className={s.text}>
          reset <br></br> local storage
        </p>
        <button className={s.btn} type="button" onClick={reset}></button>
      </div>
    </div>
  );
};

export default ResetButton;
