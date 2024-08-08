export const auth = (req,res,next) => {
    if(req.session.user){
        res.locals.user = req.session.user;
    }
    next();
};

export const forbidRoutes = (req,res,next) => {
    if(req.session.user){
        res.redirect("/")
    }else{
        next();
    }

}