const fs = require('fs').promises;

// sobreescribir un archivo o crear uno nuevo
// async function testFs(path, data){
//     try{
//         await fs.writeFile(path, data, 'utf-8');
//         console.log("archivo escrito correctamente!")
//     }catch(error){
//         console.log("error", error)
//     }
// }

// testFs('./file2.txt', 'Este es un ejemplo de escritura.' )

// agregar contenido a un archivo
// async function testFs(path, data){
//     try{
//         await fs.appendFile(path, data, 'utf-8');
//         console.log("archivo escrito correctamente!")
//     }catch(error){
//         console.log("error", error)
//     }
// }

// testFs('./file.txt', '\n\nnueva linea.' )

// crear directorios
// async function testFs(path){
//     try{
//         await fs.mkdir(path,{recursive: true});
//         console.log("directorio correctamente!")
//     }catch(error){
//         console.log("error", error)
//     }
// }

// testFs('./example/subDir' )

// eliminar directorios
// async function testFs(path){
//     try{
//         await fs.rmdir(path);
//         console.log("directorio correctamente!")
//     }catch(error){
//         console.log("error", error)
//     }
// }

// testFs('./subDir' )

// ctrl k ctrl c
// eliminar archivos
// async function testFs(path){
//     try{
//         await fs.unlink(path);
//         console.log("directorio correctamente!")
//     }catch(error){
//         console.log("error", error)
//     }
// }
// testFs('./file2.txt' )