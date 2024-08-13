import { dbconfig } from "../dbconfig.js";
import bcrypt from "bcrypt";

class User {
  async add_user(data) {
    const { login, email, password } = data;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await dbconfig.query(
      "INSERT INTO users(login, email, password) VALUES($1,$2,$3) RETURNING *",
      [login, email, hashed]
    );
    return user.rows[0].id;
  }

  async validate_user(data) {
    const { login, password } = data;

    const user = await dbconfig.query(
      "SELECT * FROM users WHERE login = $1 OR email = $1",
      [login]
    );

    if (user.rows.length === 0) {
      return false;
    }

    const foundUser = user.rows[0];

    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) {
      return false;
    }

    return foundUser;
  }
}

export default new User();
