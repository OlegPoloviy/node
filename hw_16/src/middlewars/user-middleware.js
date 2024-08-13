const auth = (req, res, next) => {
  //   if (req.cookies.user && req.cookies.email) {
  //     res.locals.user = req.cookies.user;
  //   }
  if (req.session.user && req.session.email) {
    res.locals.user = req.session.user;
  }
  next();
};

export default auth;
