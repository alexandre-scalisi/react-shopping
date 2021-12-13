import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <button className={classes.cartContainer}>
      <FontAwesomeIcon icon={faShoppingCart} className={classes.cart} />
      <span className={classes.notification}>0</span>
    </button>
  );
};

export default Cart;
