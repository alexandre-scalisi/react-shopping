console.log(process.env.RAPID_API_HOST);

export default async function handler(req, res) {
  try {
    console.log("test");
    const response = await fetch("https://dbm.p.rapidapi.com/products", {
      method: "GET",
      headers: {
        "x-rapidapi-host": process.env.RAPID_API_HOST,
        "x-rapidapi-key": process.env.RAPID_API_KEY,
      },
    });

    if (!response.ok) throw new Error();

    const data = await response.json();
    console.log(data.products);

    const transformedData = data.products.map((obj) => ({
      name: obj.name,
      shortDescription: obj.shortDescription,
      description: obj.description,
      countInStock: obj.countInStock,
      categories: obj.categories.split(">"),
      image: obj.image,
      price: obj.price,
      numReviews: obj.numReviews,
      rating: obj.rating,
    }));

    return res.status(200).json({ message: "success", data: transformedData });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
}
