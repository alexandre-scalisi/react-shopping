import NextLink from "next/link";

import classes from "./LinkButton.module.css";

const LinkButton = (props) => {
  return (
    <NextLink href={props.href}>
      <a className={`${classes.button}`}>{props.children}</a>
    </NextLink>
  );
};

export default LinkButton;
