import Product from "../../models/Product";
import db from "../database";

export default async function () {
  try {
    await db.connect();
    const productIds = await Product.find({}, { _id: 1 });
    await db.disconnect();

    return productIds;
  } catch (err) {
    console.log(err);
    await db.disconnect();
  }
}
