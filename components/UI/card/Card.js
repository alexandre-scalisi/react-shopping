import classes from "./Card.module.css";

const Card = (props) => {
  let cardClasses = props.productCard
    ? `${classes.card} ${classes.cardSmall}`
    : classes.card;

  return <div className={cardClasses}>{props.children}</div>;
};

export default Card;
