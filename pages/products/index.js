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

  const transformedProducts = products.map((product) => ({
    name: product.name,
    shortDescription: product.shortDescription,
    price: product.price,
    numReviews: product.numReviews,
    image: product.image,
    rating: product.rating,
    id: product._id.toString(),
  }));

  const productOffset = 0;
  const productsPerPage = 40;

  const endOffset = productOffset + productsPerPage;
  const currentProducts = transformedProducts.slice(productOffset, endOffset);
  const pageCount = Math.ceil(products.length / productsPerPage);

  return {
    props: {
      products: transformedProducts,
      productOffset,
      productsPerPage,
      pageCount,
      currentProducts,
      pageCount,
    },
  };
}

export default AllProducts;
