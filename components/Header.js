import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import Cart from "./Cart/Cart";
import SearchBar from "./SearchBar";

const Header = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header>
      <div>
        <h1>Next e-commerce</h1>
        <SearchBar />
        <Cart />
        <nav>
          {!loggedIn && <NextLink href={"/login"}>Login</NextLink>}
          {!loggedIn && (
            <NextLink href={"/register"}>S&apos;enregistrer</NextLink>
          )}
          {loggedIn && <NextLink>Logout</NextLink>}
        </nav>
      </div>
      <nav>
        <NextLink href="/all">Tout</NextLink>
        <NextLink href="/latest">Dernier produits</NextLink>
        <NextLink href="/best-sellers">Tout</NextLink>
        <NextLink href="/category1">Categorie 1</NextLink>
        <NextLink href="/category2">Categorie 2</NextLink>
        <NextLink href="/category3">Categorie 3</NextLink>
        <NextLink href="/category4">Categorie 4</NextLink>
        <select
          name="allCategories"
          id="allCategories"
          onChange={(e) => {
            router.push(e.target.value);
          }}
        >
          <option value="category1">categorie 1</option>
          <option value="category2">categorie 2</option>
          <option value="category3">category3</option>
          <option value="category4">category4</option>
          <option value="category5">category5</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
