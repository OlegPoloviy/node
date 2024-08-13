export const validateForm = (req,res,next) => {
    const {login,email,password,confirm_password} = req.body;
    try{
        if(login.length < 3){
            return res.status(400).send("login is too short");
        }

        if(password.length < 6){
            return res.status(400).send("password is too short");
        }

        if(password !== confirm_password){
            return res.status(400).send("passwords don`t match!");
        }

        next();
    }
    catch(err){
        console.log(err);
    }
  
}