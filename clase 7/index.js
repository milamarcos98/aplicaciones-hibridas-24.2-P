import express from "express";

const app = express();

// middleware
app.use(express.urlencoded({extended: true}))


// HTTP
// GET POST PUT PATCH DELETE
// app.post("/info")
// app.put("/users")
// app.delete("/")

app.get("/", (req, res) => {
    res.send("hola con express!")
})

app.get("/test", (req, res) => {
    res.send("test")
})

app.get("/params/:color/:forma", (req, res) => {
    let color =  req.params.color;
    let forma = req.params.forma;
    res.send(`Tu color es: ${color} y la forma: ${forma}`)
})


app.get("/alumnos/:nombre/:apellido", (req, res) => {
    let nombre =  req.params.nombre;
    let apellido = req.params.apellido;

// CAMILA
// camila
// Camila

    let str = nombre.toLowerCase();
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    let nameCapitalized = str.charAt(0).toUpperCase() + str.slice(1);
    res.send(`Alumno: ${nameCapitalized} ${apellido}`)
})

// Ejercicio
// ---------
// ruta alumnos
// recibir por parametro nombre y apellido
// mostrar en repuesta el nombre completo pero simpre Capitalizado
// Ejemplo: si me llega camila o CAMILA, siempre que devuelva Camila

const usuarios = [
    {id: 1, nombre: "Juan", apellido: "Perez", edad: 25, carrera: "DM"},
    {id: 2, nombre: "Pepe", apellido: "Perez", edad: 27, carrera: "DM"},
    {id: 3, nombre: "Carlos", apellido: "Perez", edad: 30, carrera: "DW"}
]

app.get("/users", (req, res) => {
    res.send({usuarios})
})

app.get("/consultas", (req, res) => {
    // let consultas = req.query;
    let {nombre, apellido, edad} = req.query;
    // req.query.nombre
    // res.send(consultas);
    res.send(`El nombre es: ${nombre} ${apellido} y tiene ${edad} años.`);
})

app.get("/users/carreras", (req, res) => {
    let carrera = req.query.carrera;
    if(!carrera || (carrera !== "DM" && carrera !== "DW")) return res.send({error: "valor no valido"});
    let filtrado = usuarios.filter(u => u.carrera === carrera);
    res.send({usuarios: filtrado})
})

app.get("/users/filterbyid/:id", (req, res) => {
    let userId = req.params.id;
    let usuario = usuarios.find(u => u.id === parseInt(userId));
    if(!usuario) return res.send({error: `3312: usuario con id: ${userId} no encontrado!`})
    res.send({usuario})
})




app.listen(3000, () => console.log("server running on port... \nopen in http://localhost:3000"))
