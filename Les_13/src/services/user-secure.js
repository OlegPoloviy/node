import jwt from "jsonwebtoken";

class Secure {
  generateToken(data) {
    return jwt.sign(data, process.env.ACCESS_KEY_JWT, { expiresIn: "15m" });
  }

  generateRefresh(data){
    return jwt.sign(data,process.env.REFRESH_KEY_JWT,{expiresIn: "7d"});
  }

  authenticateToken(req, res, next) {
    const auth = req.headers["authorization"];
    const token = auth && auth.split(" ")[1];
    if (!token) {
      return res.redirect("/");
    }

    jwt.verify(token, process.env.ACCESS_KEY_JWT, (err, user) => {
      if (err) {
        return res.redirect("/user/signup");
      }

      req.user = user;
      res.locals.user = user;
      next();
    });

  }
  verifyRefreshToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.REFRESH_KEY_JWT, (err, user) => {
        if (err) return reject(err);
        resolve(user);
      });
    });
  }
}

export default new Secure();
