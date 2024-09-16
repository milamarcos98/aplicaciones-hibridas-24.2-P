import express from "express";
import usersRoutes from "routes/users_routes.js"

// MVC

const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', usersRoutes)

app.listen(port,  () => {
    console.log(`http://localhost:${port}`);
})

