console.log("Segundo ejercicio con NODEJS");
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* quiero una funcion(saludo) que reciba un parametro llamado nombre y retoner un console log
que diga Hola nombre(nombre)
*/


function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}


rl.question("Ingresa tu nombre:", (inputUser)=> {
    saludo(inputUser);
    rl.close();
});