import ProductItem from "../../components/Products/ProductItem";
import getAllProducts from "../../utils/queries/get-all-products";
import getProduct from "../../utils/queries/get-product";

const Product = (props) => {
  return <ProductItem product={props.product} id={props.id} />;
};
export async function getStaticPaths() {
  const products = await getAllProducts();

  const ids = products.map((product) => ({ params: { id: product.id } }));

  return {
    paths: ids,
    fallback: true,
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
