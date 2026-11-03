
let numero = Number(prompt("Ingrese un número:"));

if (Number.isNaN(numero) || !Number.isInteger(numero) || numero < 0) {

    document.getElementById("resultado").textContent =
        "Por favor, ingrese un número entero válido.";

} else {

    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    document.getElementById("resultado").textContent =
        "El factorial de " + numero + " es: " + resultado;

}
