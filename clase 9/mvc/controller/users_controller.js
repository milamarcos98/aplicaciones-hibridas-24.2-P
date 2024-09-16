import { readUsersFile, writeUsersFile } from "../models/users_model.js";

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

const createUser = (req, res) => {
    let users = readUsersFile();
    const newUser = {
        id: users.length > 0 ? users.length + 1 : 1,
        name: req.body.name,
        email: req.body.email
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

export {getAllUsers, getUserById, createUser, updateUser, deleteUser};
