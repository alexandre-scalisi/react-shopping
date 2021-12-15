import db from "../database";
import Product from "../../models/Product";
import Category from "../../models/Category";
export default async function () {
  try {
    await db.connect();

    const products = await Product.find({}).populate({
      path: "categories",
    });
    db.disconnect();
    return products;
  } catch (err) {
    console.log(err);
    db.disconnect();
  }
}
