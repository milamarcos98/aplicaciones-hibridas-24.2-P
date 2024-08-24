import path from "path";

const rutaUnida = path.join('/user', 'local', '///bin')
console.log("ruta unida",rutaUnida)

const rutaAbsoluta = path.resolve('clase/archivo.txt')
console.log("ruta absoluta: ", rutaAbsoluta)

const extension = path.extname('clase/archivo.txt')
console.log("extension del archivo: ", extension)

const nombreArchivo = path.basename('clase/archivo.txt', extension)
console.log("nombre del archivo: ", nombreArchivo)

const directorio = path.dirname('ruta/al/archivo/de/clase/archivo.txt')
console.log("directorio del archivo: ", directorio)

const rutaNormalizada = path.normalize('/users//local/../bin')
console.log("rutaNormalizada del archivo: ", rutaNormalizada)

const partesRuta = path.parse('ruta/al/archivo/de/clase/archivo.txt')
console.log(partesRuta)

const rutaFormada = path.format({
    dir: '/ruta/completa/al',
    base: 'archivo.txt'
})

console.log("ruta formada: ", rutaFormada)

console.log("separador de directorios: ", path.sep)
// \
// /