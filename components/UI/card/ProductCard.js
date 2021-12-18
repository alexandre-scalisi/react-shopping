import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import NextLink from "next/link";

import Card from "./Card";
import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  const cards = [1, 2, 3, 4, 5].map((currRating) => {
    if (currRating - props.rating > 0 && currRating - props.rating <= 0.5) {
      return <FontAwesomeIcon icon={faStarHalf} key={currRating} />;
    }
    if (props.rating >= currRating) {
      return <FontAwesomeIcon icon={faStar} key={currRating} />;
    }
    return <FontAwesomeIcon icon={faEmptyStar} key={currRating} />;
  });

  return (
    <Card productCard={true}>
      <div className={classes.cardImageContainer}>
        <NextLink href={`products/${props.id}`}>
          <a className={classes.cardLink}></a>
        </NextLink>
        <Image
          className={classes.cardImage}
          width={300}
          height={300}
          layout="responsive"
          src={props.image}
          alt={props.name}
        />
      </div>

      <div className={classes.cardBody}>
        <NextLink href="/product/1">
          <a className={classes.cardName}>{props.name}</a>
        </NextLink>
        <p className={classes.cardDescription}>{props.description}</p>
        <div className={classes.cardFooter}>
          <div className={classes.cardPrice}>{props.price.toFixed(2)}€</div>
          <div className={classes.cardRating}>
            {cards}
            <span className={classes.rating}>{props.numReview}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
