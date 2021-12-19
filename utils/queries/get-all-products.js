import Product from "../../models/Product";
import db from "../database";
// import Category from "../../models/Category";

export default async function () {
  try {
    await db.connect();
    const products = await Product.find({}).populate({
      path: "categories",
    });

    await db.disconnect();

    const transformedProducts = products.map((product) => {
      const transformedCategories = product.categories.map((cat) => ({
        name: cat.name,
        _id: cat._id.toString(),
      }));

      return {
        _id: product._id.toString(),
        image: product.image,
        countInStock: product.countInStock,
        price: product.price,
        description: product.description,
        shortDescription: product.shortDescription,
        name: product.name,
        categories: transformedCategories,
        inStock: product.countInStock > 0,
        numReviews: product.numReviews,
        rating: product.rating,
      };
    });

    return transformedProducts;
  } catch (err) {
    console.log(err);
    await db.disconnect();
  }
}
