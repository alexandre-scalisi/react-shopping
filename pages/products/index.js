import ReactPaginate from "react-paginate";
import Router, { withRouter } from "next/router";

import CardContainer from "../../components/UI/card/CardContainer";
import ProductCard from "../../components/UI/card/ProductCard";
import getAllProducts from "../../utils/queries/get-all-products";

const AllProducts = (props) => {
  const pagginationHandler = (page) => {
    const currentPath = props.router.pathname;
    const currentQuery = props.router.query;
    currentQuery.page = page.selected + 1;

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  const products = JSON.parse(props.products);
  const productCards = products.map((product) => {
    return (
      <ProductCard
        name={product.name}
        description={product.shortDescription}
        price={product.price}
        numReviews={product.numReviews}
        image={product.image}
        rating={product.rating}
        key={product._id}
      />
    );
  });

  return <CardContainer>{productCards}</CardContainer>;
};

export async function getStaticProps(context) {
  console.log(context);
  const products = await getAllProducts();
  const propsProducts = JSON.stringify(products.slice(0, 30));
  return {
    props: {
      products: propsProducts,
    },
  };
}

export default AllProducts;
