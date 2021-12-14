import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import NextLink from "next/link";

import Card from "./Card";
import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <Card productCard={true}>
      <div className={classes.cardImageContainer}>
        <NextLink href="/product/1">
          <a className={classes.cardLink}></a>
        </NextLink>
        <img
          className={classes.cardImage}
          src="https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
          alt="product"
        />
      </div>

      <div className={classes.cardBody}>
        <p className={classes.cardDescription}>{props.description}</p>
        <div className={classes.cardFooter}>
          <div className={classes.cardPrice}>{props.price.toFixed(2)}€</div>
          <div className={classes.cardRating}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <span className={classes.rating}>10</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
