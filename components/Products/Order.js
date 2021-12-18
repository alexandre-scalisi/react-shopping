import Link from "next/link";
import classes from "./Order.module.css";

const Order = () => {
  const selectOptions = [...Array(10).keys()].map((val) => {
    return (
      <option key={val + 1} value={val + 1}>
        {val + 1}
      </option>
    );
  });

  return (
    <>
      <div>
        <label htmlFor="quantity">Quantité</label>
        <select name="quantity" id="quantity" className={classes.select}>
          {selectOptions}
        </select>
      </div>
      <Link href="#">
        <a className={classes.button}>Envoyer vers le panier</a>
      </Link>
    </>
  );
};

export default Order;
