import bcrypt from "bcrypt";
class User {
  add(login, email, password) {
    const hash = bcrypt.hashSync(password, 10);
    fetch(process.env.PATH_TO_SERVER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: login,
        email: email,
        password: hash,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
}

export default new User();
