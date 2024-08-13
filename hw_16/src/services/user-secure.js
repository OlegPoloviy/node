import jwt from "jsonwebtoken";
class Secure {
  generateToken(data) {
    return jwt.sign(data, process.env.ACCESS_KEY_JWT, { expiresIn: "15m" });
  }
  authenticateToken(req, res, next) {
    const auth = req.headers["authorization"];
    const token = auth && auth.split(" ")[1];
    if (token == null) {
      return res.sendStatus(401);
    } else {
      jwt.verify(token, process.env.ACCESS_KEY_JWT, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        } else {
          req.user = user;
          next();
        }
      });
    }
    res.send(token);
  }
}

export default new Secure();
