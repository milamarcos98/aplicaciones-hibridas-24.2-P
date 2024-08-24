// const os = require("os")
import os from "os"

console.log("arquitectura de la CPU: ", os.arch())
console.log("plataforma: ", os.platform())
console.log("Memoria libre: ", os.freemem())
console.log("Memoria libre: ", os.freemem() / (1024 * 1024), " MB")
console.log("Memoria total: ", os.totalmem())
console.log("Memoria total: ", os.totalmem() / (1024 * 1024), " MB")
console.log("CPUs: ", os.cpus())
console.log("Tiempo de actividad del sistema: ", os.uptime())
console.log("Nombre del host: ", os.hostname())
console.log("Diretorio principal del usuario: ", os.homedir())
console.log("Informacion de la red: ", os.networkInterfaces())