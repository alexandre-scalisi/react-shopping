import db from "../../utils/database";
import Product from "../../models/Product";
import Category from "../../models/Category";

const fetchData = async () => {
  const response = await fetch("https://dbm.p.rapidapi.com/products", {
    method: "GET",
    headers: {
      "x-rapidapi-host": process.env.RAPID_API_HOST,
      "x-rapidapi-key": process.env.RAPID_API_KEY,
    },
  });

  if (!response.ok) throw new Error();

  return await response.json();
};

const seedCategories = async (data) => {
  const categories = [];

  data.forEach((obj) => {
    categories.push(...obj.categories.split(">"));
  });

  const uniqueCategories = [...new Set(categories)];

  const objectCategories = uniqueCategories.map((cat) => ({
    name: cat,
  }));

  return objectCategories;
};

const seedProducts = async (data) => {
  const products = await Promise.all(
    data.map(async (obj) => {
      const categories = obj.categories.split(">");
      const categoryIds = await Category.find(
        { name: { $in: categories } },
        { _id: 1 }
      );
      const [image] = obj.image.split(",");

      return {
        name: obj.name,
        shortDescription: obj.shortDescription,
        description: obj.description,
        countInStock: obj.countInStock,
        categories: categoryIds,
        image: image,
        price: obj.price,
        numReviews: obj.numReviews,
        rating: obj.rating,
      };
    })
  );

  return products;
};

export default async function handler(req, res) {
  try {
    await db.connect();

    const { products: data } = await fetchData();

    const categories = await seedCategories(data);

    await Category.deleteMany({});
    await Category.insertMany(categories);

    const products = await seedProducts(data);

    await Product.deleteMany({});
    await Product.insertMany(products);

    return res.status(201).json({ message: "success", data: products });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
}
