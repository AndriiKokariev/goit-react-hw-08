import { Field, Form, Formik } from "formik";
import s from "../RegistrationPage/RegistrationPage.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (v, o) => {
    dispatch(login(v))
      .unwrap()
      .then(() => navigate("/contacts", { replace: true }))
      .catch((e) => e.message);

    o.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik initialValues={initValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Email:</span>
            <Field name="email"></Field>
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field name="password" type="password"></Field>
          </label>
          <button type="submit">Login</button>
          <p>
            You do not have an account yet?
            <Link to="/register">Register</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
