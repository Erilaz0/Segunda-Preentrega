alert("Bienvenido a CoderBank!");

let saldo = 0;
let exit = false;
let saldoIngresado = 0;
let saldoTotal = 0;
let saldoRetirado = 0;

while (exit === false){ 



let opciones = parseInt(prompt("1.Consultar Saldo, 2.Ingresar saldo 3.Retirar Saldo, 4.Salir"));


if (opciones === 1){
    alert("Tu saldo actual es de " + "$" + saldo);

}else if (opciones === 2){
    saldoIngresado = parseInt(prompt("Cuanto saldo deseas ingresar?"));
    saldoTotal = saldoIngresado + saldo;
    saldo = saldoTotal;
    alert("tu saldo actual es de : " + "$" + saldo);

}else if (opciones === 3) {
    saldoRetirado = parseInt(prompt("Cuanto saldo deseas retirar?"));
    saldoTotal = saldo - saldoRetirado;
    saldo = saldoTotal;
    alert("tu saldo actual es de :" + "$" + saldo);

}else if (opciones === 4){
    alert("Gracias por usar CoderBank¡");
    alert("saliendo...");
    break;

}else{
    alert("opcion invalida, intentalo denuevo");
}}