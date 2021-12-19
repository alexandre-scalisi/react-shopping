import getAllProducts from "../../utils/queries/get-all-products";
import PaginatedProducts from "../../components/Products/PaginatedProducts";

const AllProducts = (props) => {
  return (
    <PaginatedProducts
      productsPerPage={props.productsPerPage}
      products={props.products}
      productOffset={props.productOffset}
      currentProducts={props.currentProducts}
      pageCount={props.pageCount}
    />
  );
};

export async function getStaticProps() {
  const products = await getAllProducts();

  const productOffset = 0;
  const productsPerPage = 40;

  const endOffset = productOffset + productsPerPage;
  const currentProducts = products.slice(productOffset, endOffset);
  const pageCount = Math.ceil(products.length / productsPerPage);
  return {
    props: {
      products: products,
      productOffset,
      productsPerPage,
      pageCount,
      currentProducts,
      pageCount,
    },
  };
}

export default AllProducts;
