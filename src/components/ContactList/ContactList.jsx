import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contactsData, onDelete }) => {
  return (
    <div>
      <ul className={s.list}>
        {contactsData.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
