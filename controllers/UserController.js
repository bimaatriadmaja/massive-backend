import User from "../models/UserModel.js";
// tambahan
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//tambahan

export const getUsers = async(req, res)=>{
    try{
        const response = await User.findAll();
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const getUserById = async(req, res)=>{
    try{
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const createUser = async(req, res)=>{
    try{
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch(error){
        console.log(error.message);
    }
}

export const updateUser = async(req, res)=>{
    try{
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch(error){
        console.log(error.message);
    }
}

export const deleteUser = async(req, res)=>{
    try{
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User deleted"});
    } catch(error){
        console.log(error.message);
    }
}

//tambahan
export const loginUser = async (req, res) => {
    try {
        console.log('Login attempt for:', req.body.email);
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ msg: "User not found" });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            console.log('Invalid credentials');
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ msg: "Internal server error" });
    }
};
