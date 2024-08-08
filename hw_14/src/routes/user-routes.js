import { Router } from "express";
import User from "../services/user-service.js";

export const userRouter = Router();

userRouter.get("/register", (req, res) => {
    const errorMessage = req.session.errorMessage;
    delete req.session.errorMessage; 
    res.render("register-form", { title: "Register", errorMessage });
});

userRouter.post("/register", async (req, res) => {  
    const { name, email, password, repass } = req.body;
    if (password === repass) {
        await User.addUser(name, email, password); 
        console.log(`login is ${name}, email is ${email} password is ${password}`);
        res.redirect("/");
    } else {
        req.session.errorMessage = "Passwords must be equal!";
        res.redirect("/user/register");
    }
});

userRouter.get("/signin", (req, res) => {    
    res.render("signin-form", { title: "Sign in" });
});

userRouter.get("/logout", (req, res) => {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.redirect("/");
});

userRouter.post("/signin", async (req, res) => {
    const { login, password } = req.body;

    const isAuthenticated = await User.getUser(login, password);  
    if (isAuthenticated) {
        req.session.user = login;
        res.redirect("/");
    } else {
        req.session.errorMessage = "Invalid login or password";
        res.redirect("/user/signin");
    }
});
