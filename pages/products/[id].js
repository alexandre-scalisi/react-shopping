import ProductItem from "../../components/Products/ProductItem";
import getAllProductIds from "../../utils/queries/get-all-product-ids";
import getProduct from "../../utils/queries/get-product";

const Product = (props) => {
  return <ProductItem product={props.product} id={props.id} />;
};
export async function getStaticPaths() {
  const productIds = await getAllProductIds();

  const paths = productIds.map((product) => ({
    params: { id: product._id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const product = await getProduct(id);

  return {
    props: {
      id: context.params.id,
      product,
    },
  };
}

export default Product;
