import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
// import css from "./App.module.css";
import { useState, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import ResetButton from "../ResetButton/ResetButton";

const App = () => {
  /// Contacts data state.
  const [contactsData, setContactsData] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("contactsData"));
    if (savedData) {
      return savedData;
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  /// Search filter state.
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contactsData", JSON.stringify(contactsData));
  }),
    [contactsData];

  /// Add contact func.
  const addContacts = (newContacts) => {
    setContactsData((prev) => {
      return [...prev, newContacts];
    });
  };

  /// Delete contact func.
  const deleteContacts = (contactId) => {
    setContactsData((prevContacts) => {
      return prevContacts.filter((el) => el.id !== contactId);
    });
  };

  /// Reset local storage func.
  const resetLocalStorage = () => {
    localStorage.clear();
    setContactsData([
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]);
    console.log("Local storage has been reset");
  };

  /// Search contact func.
  const wantedContact = contactsData.filter((contactsData) =>
    contactsData.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(contactsData);

  return (
    <div>
      <ResetButton reset={resetLocalStorage} />
      <ContactForm addContacts={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contactsData={wantedContact} onDelete={deleteContacts} />
    </div>
  );
};

export default App;
