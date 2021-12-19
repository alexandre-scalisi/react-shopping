import CardContainer from "../../components/UI/card/CardContainer";
import ProductCard from "../../components/UI/card/ProductCard";

const Products = (props) => {
  const productCards = props.products.map((product) => {
    return (
      <ProductCard
        name={product.name}
        description={product.shortDescription}
        price={product.price}
        numReviews={product.numReviews}
        image={product.image}
        rating={product.rating}
        key={product._id}
        id={product._id}
      />
    );
  });

  return <CardContainer>{productCards}</CardContainer>;
};

export default Products;
