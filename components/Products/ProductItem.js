import Image from "next/image";
import classes from "./ProductItem.module.css";
import LinkButton from "../UI/Buttons/LinkButton";
import Order from "./Order";

const ProductItem = (props) => {
  const categoriesContent = props.product.categories.map((category) => (
    <LinkButton href="#" key={category._id} className={classes.productCategory}>
      {category.name}
    </LinkButton>
  ));

  return (
    <div className={classes.productContainer}>
      <div className={classes.productHeader}>
        <div className={classes.productImage}>
          <Image
            src={props.product.image}
            alt={props.product.name}
            width="350"
            height="400"
            className={classes.productImage}
          />
        </div>

        <div className={classes.productInfoContainer}>
          <h2 className={classes.productName}>{props.product.name}</h2>
          <p>
            {props.product.rating} <span>{props.product.numReviews}</span>
          </p>
          <p className={classes.productDescription}>
            {props.product.description}
          </p>
          <div className={classes.productCategories}>{categoriesContent}</div>
          <div className={classes.productFooter}>
            {props.product.inStock && (
              <p className={classes.productInStock}>En stock</p>
            )}
            {!props.product.inStock && (
              <p className={classes.productOutOfStock}>Rupture</p>
            )}
            <p className={classes.productPrice}>
              {props.product.price.toFixed(2)} €
            </p>
          </div>
        </div>
        <div className={classes.productShippingContainer}>
          <p className={classes.productPrice}>
            {props.product.price.toFixed(2)} €
          </p>
          {props.product.inStock && (
            <p className={classes.productInStock}>En stock</p>
          )}
          {!props.product.inStock && (
            <p className={classes.productOutOfStock}>Rupture</p>
          )}
          <p className={classes.productShippingDate}>
            Date de livraison prévue le: {""}
            <span className={classes.never}>Jamais</span>
          </p>
          <Order />
        </div>
      </div>
      <p>Commentaires: </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tenetur? Iusto libero maiores, exercitationem eos quia expedita, unde
        error eius porro dicta amet cumque optio? Explicabo libero sunt officia
        enim nam. Ducimus minima dicta, officia reiciendis quis molestias eius
        tempora nesciunt dolorem perspiciatis voluptatem saepe non delectus a
        quasi autem!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga explicabo
        adipisci similique quae harum deleniti repellat porro necessitatibus.
        Sunt, eveniet? Quasi vitae laudantium iure quos. Mollitia eaque
        quibusdam at itaque?
      </p>
    </div>
  );
};

export default ProductItem;
