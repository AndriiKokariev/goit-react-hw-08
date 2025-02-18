import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts = [], deleteContact }) => {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map((item) => (
          <li className={s.listItem} key={item.id}>
            <Contact item={item} deleteContact={deleteContact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
