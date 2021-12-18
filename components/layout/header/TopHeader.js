import { useState } from "react";
import NextLink from "next/link";

import SearchBar from "../../UI/SearchBar";
import LinkButton from "../../UI/Buttons/LinkButton";
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
            <LinkButton href={"/register"}>S&apos;enregistrer</LinkButton>
          )}
          {!loggedIn && <LinkButton href="/login">Se connecter</LinkButton>}
          {loggedIn && <LinkButton href="/logout">Logout</LinkButton>}
        </nav>
      </div>
    </div>
  );
};

export default TopHeader;
