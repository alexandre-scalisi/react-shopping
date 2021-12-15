import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

import Products from "./Products";
import classes from "./PaginatedProducts.module.css";

const PaginatedProducts = (props) => {
  const {
    productsPerPage,
    products,
    productOffset: initialItemOffset,
    currentProducts: initialCurrentProducts,
    pageCount: initialPageCount,
  } = props;

  const [currentProducts, setCurrentProducts] = useState(
    initialCurrentProducts
  );
  const [pageCount, setPageCount] = useState(initialPageCount);

  const [productOffset, setItemOffset] = useState(initialItemOffset);

  useEffect(() => {
    const endOffset = productOffset + productsPerPage;
    setCurrentProducts(products.slice(productOffset, endOffset));
    setPageCount(Math.ceil(products.length / productsPerPage));
  }, [productOffset, productsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * productsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={classes.center}>
      <Products products={currentProducts} />
      <ReactPaginate
        nextLabel="suivant"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={3}
        pageCount={pageCount}
        previousLabel="précedent"
        pageClassName={classes.pageItem}
        pageLinkClassName={classes.pageLink}
        previousClassName={classes.pageItem}
        previousLinkClassName={classes.pageLink}
        nextClassName={classes.pageItem}
        nextLinkClassName={classes.pageLink}
        breakLabel="..."
        breakClassName={classes.pageItem}
        breakLinkClassName={classes.pageLink}
        containerClassName={classes.pagination}
        activeClassName={classes.active}
        disabledClassName={classes.disabled}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginatedProducts;
