import { Field, Form, Formik } from "formik";
import s from "./RegistrationPage.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const initValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (v, o) => {
    dispatch(register(v));
    o.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik initialValues={initValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field name="name"></Field>
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field name="email"></Field>
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field name="password" type="password"></Field>
          </label>
          <button type="submit">Submit</button>
          <p>
            You already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
