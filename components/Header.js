import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import classes from "./Header.module.css";
import Cart from "./Cart/Cart";
import SearchBar from "./SearchBar";
import AuthButton from "./UI/Buttons/AuthButton";
import BottomHeader from "./BottomHeader";

const Header = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header>
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
      <BottomHeader />
    </header>
  );
};

export default Header;
