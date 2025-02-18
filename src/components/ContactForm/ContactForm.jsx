import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const ContactForm = ({ addContact }) => {
  const initValues = {
    name: "",
    number: "",
  };

  const handleSumbit = (values, action) => {
    console.log(values);

    addContact(values);
    action.resetForm();
  };

  const phoneRegex = /^(\d{3}-\d{2}-\d{2}|\d{7})$/;
  const nameRegex = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("This field is required")
      .matches(nameRegex, "Enter only letters"),
    number: Yup.string()
      .required("This field is required")
      .min(7, "The number must contain 7 characters")
      .matches(phoneRegex, "Phone number format ХХХ-ХХ-ХХ"),
  });

  return (
    <div>
      <Formik
        initialValues={initValues}
        onSubmit={handleSumbit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <p>Name</p>
            <Field className={s.input} name="name"></Field>
            <ErrorMessage component="span" name="name" />
          </label>
          <label className={s.label}>
            <p>Number</p>
            <Field className={s.input} name="number" type="tel"></Field>
            <ErrorMessage component="span" name="number" />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
