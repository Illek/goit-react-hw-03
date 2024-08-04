import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
// import css from "./App.module.css";
import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";

const App = () => {
  // const handleLogin = (userData) => {
  //   console.log(userData);
  // };
  const [contactsData, setContactsData] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const addContacts = (newContacts) => {
    setContactsData((prev) => {
      return [...prev, newContacts];
    });
  };

  const deleteContacts = (contactId) => {
    setContactsData((prevContacts) => {
      return prevContacts.filter((el) => el.id !== contactId);
    });
  };

  console.log(contactsData);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <SearchBox />
      <ContactList contactsData={contactsData} onDelete={deleteContacts} />
    </div>
  );
};

export default App;
