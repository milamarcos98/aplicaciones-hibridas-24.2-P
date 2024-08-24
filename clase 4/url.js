import { URL } from "url";

const miURL = new URL('https://www.ejemplo.com:8080/carpeta/subcarpeta?nombre=usuario&orden=Asc#seccion1')

console.log('protocolo: ',miURL.protocol)
console.log('hostname: ',miURL.hostname) //sin el puerto
console.log('puerto: ',miURL.port) 
console.log('pathname: ',miURL.pathname) 
console.log('query strings: ',miURL.search) 
miURL.searchParams.forEach((valor, nombre) => {
    console.log(`${nombre}: ${valor}`)
})
console.log('params query: ', miURL.searchParams.get('orden'))
console.log('fragmento (hash): ', miURL.hash)
console.log('URL formateada: ', miURL.toString())

const baseURL = 'https://www.ejemplo.com/api/v2/'
const relativeURL = 'subcarpeta/archivo.html'
const rutaResuelta = new URL(relativeURL, baseURL)
console.log('URL: ', rutaResuelta.href)
