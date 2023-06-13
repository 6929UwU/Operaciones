function sumar () {
    let numero1 = parseInt (document.getElementById("num1").value)
    let numero2 = parseInt (document.getElementById("num2").value)
    let suma = numero1 + numero2
    //mostrar resultado
    document.getElementById("resultado").textContent = "La suma es: " + suma;
}