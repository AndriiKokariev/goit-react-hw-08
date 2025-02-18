import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useState, useEffect } from "react";
import s from "./App.module.css";
import { nanoid } from "nanoid";

const App = () => {
  const initContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) ?? initContacts
  );
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const addContact = (newContact) => {
    const find = contacts.find(
      (contact) => contact.number === newContact.number
    );
    if (find) {
      return;
    }
    newContact.id = nanoid();
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} handleFilter={handleFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
