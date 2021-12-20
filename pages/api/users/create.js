import sanitize from "mongo-sanitize";
import db from "../../../utils/database";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await db.connect();

      const body = JSON.parse(req.body);
      const email = sanitize(body.email);
      const password = sanitize(body.password);

      await User.create({ email, password: bcrypt.hashSync(password) });

      await db.disconnect();
      return res.status(200).json({ message: "success" });
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  } else {
    return res.status(404).json({ message: "page not foundo" });
  }
}
