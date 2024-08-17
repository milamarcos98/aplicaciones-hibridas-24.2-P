// BLOQUEANTES

// NO BLOQUEANTES


// CODIGO SINCRONO
// https://www.quora.com/What-is-1e9-in-programming

// function fetchData(){
//     for(let i=0; i<1e9; i++){}
//     return "Datos obtenidos";
// }

// console.log("inicio")
// const data = fetchData()
// console.log(data)
// console.log("fin")


// CODIGO ASINCRONO

// function fetchData(){
//     setTimeout(function(){
//         for(let i=0; i<100000; i++){}
//         return "Datos obtenidos";
//     },1000)
// }

// console.log("inicio")
// const data2 = fetchData()
// console.log(data2) //UNDEFINED
// console.log("fin")


// CALLBACKS


// function fetchData(callback){
//     setTimeout(function(){
//         callback("Datos obtenidos")
//     },1000)
// }

// console.log("inicio")
// fetchData(function(data) {
//     console.log(data)
// })
// console.log("fin")


// CALLBACK HELL

// function fetchData(callback){
//     // setTimeout(function(){
//         callback("Datos obtenidos")
//     // },1000)
// }

// function processData(data, callback){
//     // setTimeout(function(){
//         const processedData = data.toUpperCase();
//         callback(callback)
//     // }, 1000)
// }

// function saveData(data, callback){
//     // setTimeout(() => {
//         console.log("datos guardados: " + data)
//         callback();
//     // }, 1000);
// }

// fetchData(function(data){
//     processData(data, function(processedData){
//         saveData(processedData, function(){
//             console.log("proceso completado")
//         })
//     })
// })

// PROMESAS

// PENDIENTE / PENDING

// const promesaPendiente = new Promise((resolve, reject) => {
//     console.log("promesa pendiente...")
// })

// CUMPLIDA / FULFILLED

// const promesaResuelta = new Promise((resolve, reject) => {
//     resolve("Promesa realizada con exito...")
// })

// promesaResuelta.then(resultado => {
//     console.log(resultado)
// })

// RECHAZA / REJECTED

// const promesaRechazada = new Promise((resolve, reject) => {
//     reject("nos mintieron...")
// })

// promesaRechazada.catch(error => {
//     console.error(error)
// })

// COMPLETA

// const promesa = new Promise((resolve, reject) => {
//     const exito = false;
//     if(exito){
//         resolve("Promesa realizada con exito...")
//     }else{
//         reject("nos mintieron...")
//     }
// })

// promesa
//     .then(resultado => {
//         console.log(resultado) //se ejecuta si se cumple
//     })
//     .catch(error => {
//         console.error(error) //se ejecuta si se rechaza la promesa
//     })
//     .finally(() => {
//         console.log("termino")
//     })



// ENCADENAMIENTO

// const primeraPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("primer resultado")
//     },1000)
// })

// primeraPromesa
//     .then(resultado => {
//         console.log(resultado)
//         return "resultado segunda promesa"
//     })
//     .then(resultado2 => {
//         console.log(resultado2)
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("segunda operacion")
//             }, 1000);
//         })
//     })
//     .then(resultado3 => {
//         console.log(resultado3)
//     })
//     .catch(error => {
//         console.error("error:", error)
//     })

// EJERCICIO


// guardar el lado que eligen en una variable
// si el random es el que eligieron ganaron (imprimir mensaje), sino perdieron (imprimir mensaje)

function moneda(){
    
    return new Promise((resolve, reject) => {
        
        const resultado = Math.random() < 0.5 ? "cara" : "cruz";

        const eleccion = "cruz";

        if(resultado === eleccion){
            resolve("yay ganaste!!")
        }else{
            reject("perdisteee")
        }
    })
}

moneda
    .then(mensaje => {
        console.log(mensaje)
    })
    .catch(error => {
        console.log(error)
    })


    // -----------------------------METODOS----------------------------

// PROMISE ALL
// (todas se cumplieron)
// 2 / hola / 100
Promise.all([promesa1, promesa2, promesa3])
.then((resultado) => {
    console.log(resultado) //[2, "hola", 100]
})
.catch((error) => {
    console.log(error)
})

// PROMISE RACE
// (resultado de la primera que termina - ya sea que se cumple o rechaza)
// 5        /    1   /    3
// primero / segundo / tercero
Promise.race([promesa1, promesa2, promesa3])
.then((resultado) => {
    console.log(resultado) //segundo
})
.catch((error) => {
    console.log(error)
})

// PROMISE allSettled
// (terminaron - sin importar si se cumplen o rechazan)
// 5        /    1   /    3
// resulve / rechaza / resuelve
Promise.allSettled([promesa1, promesa2, promesa3])
.then((resultado) => {
    console.log(resultado) 
    // [
    //     {status: 'fulfilled', value: '...'},
    //     {status: 'rejected', value: '...'},
    //     {status: 'fulfilled', value: '...'},
    // ]
})
.catch((error) => {
    console.log(error)
})