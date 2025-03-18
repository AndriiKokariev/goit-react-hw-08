import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <div className={s.contactInfo}>
        <span className={s.name}>
          <FaUser className={s.icons} />
          {item.name}
        </span>
        <span className={s.number}>
          <BsFillTelephoneFill className={s.icons} />
          {item.number}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteContact(item.id))}
        className={s.btn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
