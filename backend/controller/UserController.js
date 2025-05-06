import User from "../models/User.js";
 export function signUp(req , res){
    const {name , email , password} = req.body;
    try {
        const user = new User({name , email , password});
        user.save();
        res.status(201).json({message : "User created successfully"});

        
    } catch (error) {
        res.status(400).json({message : "Error creating user"});
    }



}