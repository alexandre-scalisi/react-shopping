import { useState } from "react";
import NextLink from "next/link";

import SearchBar from "../../UI/SearchBar";
import AuthButton from "../../UI/Buttons/AuthButton";
import Cart from "../../Cart/Cart";
import classes from "./TopHeader.module.css";

const TopHeader = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className={classes.headerTop}>
      <NextLink href="/">
        <a className={classes.title}>Next e-commerce</a>
      </NextLink>
      <SearchBar />
      <div className={classes.rightPart}>
        <Cart />
        <nav className={classes.authNav}>
          {!loggedIn && (
            <AuthButton href={"/register"}>S&apos;enregistrer</AuthButton>
          )}
          {!loggedIn && <AuthButton href="/login">Se connecter</AuthButton>}
          {loggedIn && <AuthButton href="/logout">Logout</AuthButton>}
        </nav>
      </div>
    </div>
  );
};

export default TopHeader;
