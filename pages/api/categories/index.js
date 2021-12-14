import db from "../../../utils/database";
import Category from "../../../models/Category";
// import Product from "../../../models/";

export default async function handler(req, res) {
  try {
    await db.connect();
    // await Category.create({ name: "test2" });
    const categories = await Category.find({
      name: { $in: ["test", "test2"] },
    });
    console.log(categories);

    return res.status(201).json({ message: "success" });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
}
