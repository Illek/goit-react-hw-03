import s from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <p className={s.name}>{name}</p>
        <p className={s.number}>{number}</p>
      </div>
      <button className={s.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
