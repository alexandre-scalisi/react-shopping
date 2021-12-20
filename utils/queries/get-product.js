import db from "../database";
import Product from "../../models/Product";

export default async function (id) {
  try {
    await db.connect();

    const product = await Product.findOne({ _id: id }).populate({
      path: "categories",
    });

    await db.disconnect();

    const transformedCategories = product.categories.map((cat) => ({
      name: cat.name,
      _id: cat._id.toString(),
    }));

    const transformedProduct = {
      _id: product._id.toString(),
      image: product.image,
      countInStock: product.countInStock,
      price: product.price,
      description: product.description,
      shortDescription: product.shortDescription,
      name: product.name,
      categories: transformedCategories,
      inStock: product.countInStock > 0,
    };

    return transformedProduct;
  } catch (err) {
    console.log(err);
    await db.disconnect();
  }
}
