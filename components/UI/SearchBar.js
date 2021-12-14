import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.searchContainer}>
      <select className={classes.searchCategories}>
        <option value="all">Tous</option>
        <option value="category1">Catégorie 1</option>
        <option value="category2">Catégorie 2</option>
        <option value="category3">Catégorie 3</option>
      </select>
      <input
        type="search"
        className={classes.searchBar}
        placeholder="Rechercher un article par catégorie"
      ></input>
    </div>
  );
};

export default SearchBar;
