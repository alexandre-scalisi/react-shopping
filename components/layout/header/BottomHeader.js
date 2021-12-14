import NextLink from "next/link";
import { useRouter } from "next/router";

import classes from "./BottomHeader.module.css";

const BottomHeader = () => {
  const router = useRouter();

  return (
    <nav className={classes.bottomHeader}>
      <NextLink href="/all">
        <a className={classes.link}>Tout</a>
      </NextLink>
      <NextLink href="/latest">
        <a className={classes.link}>Dernier produits</a>
      </NextLink>
      <NextLink href="/best-sellers">
        <a className={classes.link}>Tout</a>
      </NextLink>
      <NextLink href="/category1">
        <a className={classes.link}>Categorie 1</a>
      </NextLink>
      <NextLink href="/category2">
        <a className={classes.link}>Categorie 2</a>
      </NextLink>
      <NextLink href="/category3">
        <a className={classes.link}>Categorie 3</a>
      </NextLink>
      <NextLink href="/category4">
        <a className={classes.link}>Categorie 4</a>
      </NextLink>
      <select
        className={classes.dropdown}
        name="allCategories"
        id="allCategories"
        onChange={(e) => {
          router.push(e.target.value);
        }}
      >
        <option value="category1">Categorie 1</option>
        <option value="category2">Categorie 2</option>
        <option value="category3">Categorie 3</option>
        <option value="category4">Categorie 4</option>
        <option value="category5">Categorie 5</option>
      </select>
    </nav>
  );
};

export default BottomHeader;
