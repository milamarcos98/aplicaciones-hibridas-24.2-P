import { readUsersFile, writeUsersFile } from "../models/users_model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const getAllUsers = (req, res) => {
    let users = readUsersFile();
    res.status(200).json(users);
}

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsersFile();
    const user = users.find(u => u.id === userId);

    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({message: "Usuario no encontrado", code: 3312});
    }
}

const loginUser = async (req, res) => {

    const {email, password} = req.body;

    let users = readUsersFile();

    const user = users.find(u => u.email === email);

    if(!user){
        return res.status(404).json({message: "usuario no encontrado"})
    }

    const validPassword =  bcrypt.compare(password, user.password);
    if(!validPassword){
        return res.status(401).json({message: "contraseña incorrecta"})
    }

    const secretKey = "clavesupersecreta"
    const token = jwt.sign({id: user.id, email: user.email}, secretKey, {expiresIn: '1h'});
    res.status(200).json({token});
    }

const createUser = async (req, res) => {
const {name, lastname, username, password, email} = req.body;

const hashedPassword = await bcrypt.hash(password, 10);

console.log(password)
console.log(hashedPassword)

    let users = readUsersFile();

    const newUser = {
        id: users.length > 0 ? users.length + 1 : 1,
        name,
        lastname,
        email,
        username,
        password: hashedPassword
    }

    users.push(newUser);
    writeUsersFile(users)
    res.status(201).json(newUser)
}

const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsersFile();
       const userIndex = users.findIndex(u => u.id === userId);
    
       if(userIndex !== -1){
        users[userIndex] = {id: userId, ...req.body}; //SPREAD OPERATO
        writeUsersFile(users)
        res.status(200).json(users[userIndex])
       }
}

const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsersFile();
    const userIndex = users.findIndex(u => u.id === userId);
 
    if(userIndex !== -1){
    users.splice(userIndex, 1)
    writeUsersFile(users)
     res.status(204).send(); //No content
    }
}

export {getAllUsers, getUserById, createUser, loginUser, updateUser, deleteUser};
