import css from "./SearchBar.module.css"
import { MdSearch } from "react-icons/md";

function SearchBar(params) {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <input
        className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}><MdSearch size="24" /></button>
      </form>
    </header>
  );
}

export default SearchBar;
