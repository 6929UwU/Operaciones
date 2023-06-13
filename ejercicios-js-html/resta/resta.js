function restar() {
    let numero1 = parseInt (document.getElementById("num1").value)
    let numero2 = parseInt (document.getElementById("num2").value)
    let resta = numero1 - numero2
    //mostrar resultado
    document.getElementById("resultado").textContent = "La resta es: " + resta;
}