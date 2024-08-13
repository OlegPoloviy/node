import { Router } from "express";
import User from "../postgres/models/User.js";
import user from "../services/user-service.js";
import secure from "../services/user-secure.js";
import { validateForm } from "../middlewars/form-validation.js";

const user_router = Router();
user_router.get("/signup", (req, res) => {
  res.render("form_register", { title: "Registration Form" });
});

user_router.get("/signin", (req, res) => {
  res.render("form_auth", { title: "Auth Form" });
});

user_router.post("/signin", async (req, res) => {
  const user = await User.validate_user(req.body);
  if (!user) {
    res.json("Your password or login is not correct");
  } else {
    const { login, email } = user;
    req.session.user = login;
    req.session.email = email;
    res.redirect("/");
  }
});

user_router.post("/signup",validateForm,
  async (req, res) => {
      const { login, email, password, confirm_password } = req.body;
      await User.add_user(req.body);
      // res.cookie("user", login);
      // //res.cookie("email", email, { maxAge: 1000000, httpOnly:true });
      // res.cookie("email", email);
      res.redirect("/");
  }
);

user_router.get("/logout", (req, res) => {
  // res.clearCookie("user");
  // res.clearCookie("email");
  req.session.destroy();
  res.redirect("/");
});

//JWT
/*
{
  "login":"your login",
  "email":"email",
  "password":"123",
  "confirm_password":"123"
}
*/

user_router.post("/", (req, res) => {
  const { login, email, password, confirm_password } = req.body;
  if (login.length > 3 && password === confirm_password) {
    const token = secure.generateToken(req.body);
    res.json({ token: token });
  } else {
    res.send("Error");
  }
});

user_router.get("/", secure.authenticateToken, (req, res) => {
  res.send(req.user);
});
export default user_router;
