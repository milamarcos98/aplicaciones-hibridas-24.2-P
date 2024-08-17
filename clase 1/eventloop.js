function sumar(a, b){
    return a + b;
}

function multi(a, b){
    return a * b;
}

function mostrar(){
    const numero1 = 5;
    const numero2 = 10;

    const suma = sumar(numero1, numero2);
    console.log(`la suma de ${numero1} y ${numero2} es: ${suma}`);

    const producto = multi(numero1, numero2);
    console.log(`el producto de ${numero1} y ${numero2} es: ${producto}`)
}

mostrar()








console.log("inicio")
console.log("uno")

function dos(){
    setTimeout(function(){
        console.log("dos")
    }, 1000);
}

function uno(){
    setTimeout(function(){
        console.log("tres")
    },0)
    dos();
    console.log("cuatro");
}

uno();

console.log("fin")


// https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=12s
// https://www.jsv9000.app/
// https://js-scope-visualizer.firebaseapp.com/#visualizer


function funcionA(){
    setTimeout(function(){
        console.log("ejecutando A");
        funcionB();
        console.log("finalizando A");
    },0)
}

function funcionB(){
    console.log("ejecutando B");
    funcionC();
    console.log("finalizando B");
}

function funcionC(){
    console.log("ejecutando C");
}

console.log("inicio del programa");
funcionA();
console.log("Fin del programa")







console.log("inicio del programa");

setTimeout(function(){
    console.log("tarea en task queue (settimeout)")
},0)

Promise.resolve().then(function(){
    console.log("primera tarea de la microtask queue (promise)")
}).then(function(){
    console.log("segunda tarea de la microtask queue (promise)")
})

console.log("fin del programa")