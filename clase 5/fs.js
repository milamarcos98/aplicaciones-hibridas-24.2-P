// // fs filesystem

// const fs = require('fs')
// const fs = require('fs').promises

// fs.readFile

// const {readFile} = require('fs')
// const {readFile} = require('fs').promises

// // esm

// import fs from "fs"
// import {promises as fs} from "fs"
// import {readFile} from "fs/promises"


// lectura de archivos
// async function readFiles(path){
    //     try{
        //         const data = await readFile(path, 'utf-8');
        //         console.log(data)
        //     }catch(error){
            //         console.log("error: ",error)
            //     }
            // }
            
            // readFiles('./file2.txt')
            

            
            
            // lectura del contenido de un directorio
            // async function readDirectory(path){
                //     try{
                    //         const data = await readdir(path);
                    //         console.log(data)
                    //     }catch(error){
                        //         console.log("error: ",error)
                        //     }
                        // }
                        
                        // readDirectory('./')

// informacion de un archivo o directorio -  "los stats"
// async function getStats(path){
//     try{
//         const data = await stat(path);
//         console.log(data)
//     }catch(error){
//         console.log("error: ",error)
//     }
// }

// getStats('./file.txt')

const {readFile, readdir, stat, access, constants} = require('fs').promises

// fs.exists

// R_OK - reading permisos de lectura
// W_OK - writing permisos de escritura
// X_OK - permisos de ejecucion

async function getData(path){
    try{
        const data = await access(path, constants.R_OK | constants.W_OK);
        console.log('se puede leer')
    }catch(error){
        console.log("no se puede leer")
    }
}

getData('./file.txt')



