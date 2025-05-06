import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
 export async function signUp(req , res){
    
    
    try {
        const {name , email , password} = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
          }
        const exsitingUser =  await User.findOne({ email });
        const hashedpassword = await bcrypt.hash(password , 10);
        if (!exsitingUser) {
            const user = new User({ name , email , password:hashedpassword });
            user.save();
         res.status(201).json({message : "User created successfully"});
        } else {
            res.status(400).json({ message: "Email already exists" });
            }
    } catch (error) {
        res.status(400).json({message : "Error creating user"});
    }
}

export async function login(req , res){
    try {
        const {email , password} = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({message : "Invalid email or password"});
        }
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(400).json({message : "Invalid email or password"});
            }
            const token  = jwt.sign({id : user._id , email:user.email} , "your_jwt_secret");
            res.status(200).json({message : "User logged in successfully" , token} );
            } catch (error) {
                res.status(400).json({message : "Error logging in user"});
                }
}
