import sanitize from "mongo-sanitize";
import db from "../../../../utils/database";
import User from "../../../../models/User";

export default async function handler(req, res) {
  try {
    await db.connect();

    const email = sanitize(req.query.email);

    const user = await User.find({ email });

    await db.disconnect();

    return res.status(200).json({ message: "success", data: user });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
}
