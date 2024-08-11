import { Router } from "express";
import User from "../postgres/models/User.js";
import jwt from "jsonwebtoken";
import user from "../services/user-service.js";
import secure from "../services/user-secure.js";
const user_router = Router();
user_router.get("/signup", (req, res) => {
  res.render("form_register", { title: "Registration Form" });
});

user_router.get("/signin", (req, res) => {
  res.render("form_auth", { title: "Auth Form" });
});

user_router.post("/signup", async (req, res) => {
  const { login, email, password } = req.body;
  console.log(req.body);
  await User.add_user(req.body);
  req.session.user = login;
  req.session.email = email;
  user.add(login, email, password);
  // res.cookie("user", login);
  // //res.cookie("email", email, { maxAge: 1000000, httpOnly:true });
  // res.cookie("email", email);
  console.log(login, email, password);
  res.redirect("/");
});

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
    const accessToken = secure.generateToken(req.body);
    const refreshToken = secure.generateRefresh(req.body);
    res.cookie("refreshToken", refreshToken, {  sameSite: "Strict" ,httpOnly: true, secure: true});
    req.session.user = { login, email };
    res.json({ token:accessToken });
  } else {
    res.redirect("/")
  }
});

user_router.post("/refresh", async (req, res) => {
  const { refreshToken } = req.body;
  try {
    const user = await secure.verifyRefreshToken(refreshToken);
    const newAccessToken = secure.generateToken(user);
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(403).json({ message: "Invalid refresh token" });
  }
});

user_router.get("/", secure.authenticateToken, (req, res) => {
  console.log(req.session)
  res.send(req.user);
});

user_router.get("/get-users", (req,res) => {
  res.render("home");
})

export default user_router;
