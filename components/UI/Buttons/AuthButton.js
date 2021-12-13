import NextLink from "next/link";

import classes from "./AuthButton.module.css";

const AuthButton = (props) => {
  return (
    <NextLink href={props.href}>
      <a className={classes.button}>{props.children}</a>
    </NextLink>
  );
};

export default AuthButton;
