import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);

  const visibleContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().trim().includes(filters.toLowerCase().trim());
  });

  return (
    <div>
      <ul className={s.list}>
        {visibleContacts.map((item) => (
          <li className={s.listItem} key={item.id}>
            <Contact item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
