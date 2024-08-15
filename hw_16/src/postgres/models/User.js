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

  async getUsers(){
    const users = await dbconfig.query(
        "SELECT * FROM users"
    );
    return  users.rows;
  }

  async deleteUser(data){
    const deleteUser = await dbconfig.query(
        "DELETE FROM users WHERE id=$1 RETURNING *",
        [data]
    );
    return deleteUser.rows[0];
  }

  async updateUser(login,email,id){
    const changes = await dbconfig.query(
        "UPDATE USERS SET login=$1, email=$2 WHERE id=$3",
        [login,email,id]
    )
    return changes.rows[0];
  }
}

export default new User();
