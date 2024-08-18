import {check,validationResult} from "express-validator"


export const validateForm = [
    check("login")
        .isLength({ min: process.env["MIN_LOGIN "]})
        .withMessage("Login is too short"),
    check("password")
        .isLength({ min: 6 })
        .withMessage("Password is too short"),
    check("confirm_password")
        .custom((value, { req }) => value === req.body.password)
        .withMessage("Passwords don't match"),
    check("email")
        .isEmail()
        .withMessage("Email is not correct"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.errors });
        }
        next();
    }
];

export const validateAuth = [
    check("login")
        .isLength({ min: process.env["MIN_LOGIN "] })
        .withMessage("Login is too short"),
    check("password")
        .isLength({min : 6})
        .withMessage("Password is too short"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.errors});
        }
        next();
    }
];

export const validateChange = [
    check("changeLogin")
        .isLength({min: process.env["MIN_LOGIN "]})
        .withMessage("New login is too short!"),
    check("changeEmail")
        .isEmail()
        .withMessage("Enter a valid email"),
    check("changeID")
        .isNumeric()
        .withMessage("enter a number!"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.errors});
        }
        next();
    }
];
