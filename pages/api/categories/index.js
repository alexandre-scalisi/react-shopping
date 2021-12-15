import db from "../../../utils/database";
import Category from "../../../models/Category";

export default async function handler(req, res) {
  try {
    await db.connect();
    const categories = await Category.find({});
    console.log(categories);

    return res.status(201).json({ message: "success", data: categories });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
}
