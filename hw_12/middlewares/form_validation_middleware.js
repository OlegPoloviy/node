import bcrypt from "bcrypt";

export const form_validation = async (req,res,next) => {
    const { firstName, lastName, emailAddress, password } = req.body;

    try{
        if(emailAddress <= 3){
            return res.status(400).send("Email is too short");
        }
    
        if (password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters long' });
        }
    
        if(firstName < 2){
            return res.status(400).json({ error: 'Your name is too short' });
        }
    
        if(lastName < 1){
            return res.status(400).json({ error: 'Your last name is too short' });
        }
    
        const hashed = await bcrypt.hash(password,10);
    
        req.body.password = hashed;
    
        console.log(req.body.password);
        next();
    }
    catch (err) {
        console.error('Form validation error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}