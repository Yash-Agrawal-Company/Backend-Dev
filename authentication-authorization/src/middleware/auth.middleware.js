import bcrypt from "bcrypt";
const authMiddleware = (req, res, next) => {
    const {password} = req.body;
    if (!password || password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters" });
    }else{
        req.body.password = bcrypt.hashSync(password, 10);
    }
    next();
}

  
export default authMiddleware;