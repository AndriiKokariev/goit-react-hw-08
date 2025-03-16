import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <p className={s.text}>Loading...</p>
    </div>
  );
};

export default Loader;
