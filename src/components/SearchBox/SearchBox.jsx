import s from "./SearchBox.module.css";

const SearchBox = ({ filter, handleFilter }) => {
  return (
    <div className={s.searchBox}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};

export default SearchBox;
