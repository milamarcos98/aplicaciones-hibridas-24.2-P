import express from "express";
const app = express();

// middlewares

// function middlewareEjemplo(req, res, next){
//     console.log("middleware");
//     next();
// }

// app.use(middlewareEjemplo)

// app.get('/test', middlewareEjemplo, (req, res) => {
//     res.send("test");
// })

const enMantenimiento = true;

function verificarMantenimiento(req, res, next){
    if(enMantenimiento){
        res.status(503).send("El servidor esta en mantenimiento, intentalo mas tarde");
    }else{
        next()
    }
}

// app.use(verificarMantenimiento);

function accesoRestringidoPorHorario(req, res,next){
    const horaActual = new Date().getHours();
    console.log(horaActual);
    if(horaActual >= 8 && horaActual < 20){
        next();
    }else{
        return res.status(403).json({mensaje: "Acceso no permitido fuera del horario laboral"})
    }
}

// app.use(accesoRestringidoPorHorario)

function respuestaConDelay(ms){
    return function(req, res, next){
        setTimeout(() => next(), ms);
    }
}

// app.use(respuestaConDelay(3000))

function logTiempoRespuesta(req, res, next){
    const inicio = Date.now();

    res.on('finish', () => {
        const tiempoTranscurrido = Date.now() - inicio;
        console.log(`${req.method} ${req.originalUrl} tomó ${tiempoTranscurrido} ms`)
    })

    next();
}

function verificarCuerpoVacio(req, res, next){
    if(req.method === "POST"  || req.method === "PUT"){
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({mensaje: 'El cuerpo de la solicitud no puede estar vacio!'})
        }
    }
    next();
}

// app.use(express.json());
// app.use(verificarCuerpoVacio);

function verificarRol(rolesPermitidos){
    return function (req, res, next){
        const rolUsuario = req.headers['x-rol'];

        if(rolesPermitidos.includes(rolUsuario)){
            next();
        }else{
            res.status(403).json({mensaje: "Acceso denegado"})
        }
    }
}

const solicitudesPorIP = {};

// IP
function limitarSolicitudes(req, res, next){
    const ip = req.ip;
    console.log(ip)
    const tiempoActual = Date.now();

    if(!solicitudesPorIP[ip]){
        solicitudesPorIP[ip] = [];
    }

    solicitudesPorIP[ip] = solicitudesPorIP[ip].filter(tiempo => tiempo > tiempoActual - 60000)

    // limitar a 10 solicitudes por minuto
    if(solicitudesPorIP[ip].length >= 10){
        return res.status(429).json({mensaje: "Demasiadas solicitudes. Intentalo de nuevo en un minuto."})
    }

    solicitudesPorIP[ip].push(tiempoActual);
    next();
}

// app.use(limitarSolicitudes)


app.get('/hola', (req, res) => {
    res.send("hola");
})

app.get('/error', (req, res, next) => {
    const error = new Error("Algo salio mal");
    error.status = 500;
    next(error)
})

app.use((err, req, res, next) => {
    console.log(err);

    res.status(err.status || 500).json({
        mensaje: err.message || "Error interno del servidor", 
        status: err.status ||500
    })
})


app.get('/panel', verificarRol(['admin', 'super-admin']), (req, res) => {
    res.send("hola admin");
})



app.listen(3000, () => console.log("http://localhost:3000"))