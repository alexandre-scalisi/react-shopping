import db from "../../../utils/database";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  try {
    await db.connect();

    const products = await Product.find({}).populate({
      path: "categories",
    });

    return res.status(200).json({ message: "success", data: products });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
}
