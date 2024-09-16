import express from "express";
import fs from "fs"

const app = express();
const port = 3000;

app.use(express.json());

// let users = [
//     {id: 1, name: 'Pepe', email: 'pepe@pepe.com'},
//     {id: 2, name: 'Juan', email: 'juan@pepe.com'}
// ];

const readUsersFile = () => {
    const data = fs.readFileSync('users.json', 'utf8');
    return JSON.parse(data);
}

const writeUsersFile = (data) => {
    fs.writeFileSync('users.json', JSON.stringify(data), 'utf8')
}

// GET ALL USERS
app.get('/users', (req, res) => {
    let users = readUsersFile();
    res.status(200).json(users);
})

// GET USER BY ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsersFile();
    const user = users.find(u => u.id === userId);

    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({message: "Usuario no encontrado", code: 3312});
    }
})

// POST - CREATE USER
app.post('/users', (req, res) => {
    // const newUser = {
    //     id: users.length + 1,
    //     name: req.body.name,
    //     email: req.body.email
    // }

    // users.push(newUser);
    // res.status(201).json(newUser)
    let users = readUsersFile();
    const newUser = {
        id: users.length > 0 ? users.length + 1 : 1,
        name: req.body.name,
        email: req.body.email
    }

    users.push(newUser);
    writeUsersFile(users)
    res.status(201).json(newUser)
});

// PUT - UPDATE USER
app.put('/users/:id', (req, res) => {
//    const userId = parseInt(req.params.id);
//    const userIndex = users.findIndex(u => u.id === userId);

//    if(userIndex !== -1){
//     users[userIndex] = {id: userId, ...req.body}; //SPREAD OPERATO
//     res.status(200).json(users[userIndex])
//    }
const userId = parseInt(req.params.id);
let users = readUsersFile();
   const userIndex = users.findIndex(u => u.id === userId);

   if(userIndex !== -1){
    users[userIndex] = {id: userId, ...req.body}; //SPREAD OPERATO
    writeUsersFile(users)
    res.status(200).json(users[userIndex])
   }
});

// DELETE USER
app.delete('/users/:id', (req, res) => {
    // const userId = parseInt(req.params.id);
    // const userIndex = users.findIndex(u => u.id === userId);
 
    // if(userIndex !== -1){
    // users.splice(userIndex, 1)
    //  res.status(204).send(); //No content
    // }
    const userId = parseInt(req.params.id);
    let users = readUsersFile();
    const userIndex = users.findIndex(u => u.id === userId);
 
    if(userIndex !== -1){
    users.splice(userIndex, 1)
    writeUsersFile(users)
     res.status(204).send(); //No content
    }
 });

app.listen(port,  () => {
    console.log(`http://localhost:${port}`);
})

//SPREAD OPERATOR
//destructuring