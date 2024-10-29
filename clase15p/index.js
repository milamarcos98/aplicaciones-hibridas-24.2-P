import express from "express";
import usersRoutes from "./routes/users_routes.js"
import coursesRoutes from "./routes/courseRoutes.js"
import mongoose from "mongoose";
import dotenv from "dotenv/config"

// MVC

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('conexion exitosa con mongodb!'))
.catch((err) => console.error('error al conectar con mongo', err))

app.get("/", (req, res) => {
  res.send("hello world")
})

app.use('/users', usersRoutes)
app.use('/courses', coursesRoutes)

app.listen(port,  () => {
    console.log(`http://localhost:${port}`);
})

