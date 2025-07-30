//1. Captura de variables
const pantalla = document.querySelector("#moticos") //Para capturar imagen
const btn1 = document.querySelector("#boton1") //Para capturar botón 1
const btn2 = document.querySelector("#boton2") //Para capturar botón 2
const btn3 = document.querySelector("#boton3") //Para capturar botón 3

//2. Funciones 
function blancoynegro () {
  console.log("Imagen modificada")
  pantalla.style.filter = "grayscale(100%)"
/*   btn1.style.background = "blueviolet"
  btn1.style.color = "white"
  btn1.style.heigth = "200px"
  btn1.style.borderRadius = "50%" */
}

//3. Eventos
btn1.addEventListener("click", blancoynegro)