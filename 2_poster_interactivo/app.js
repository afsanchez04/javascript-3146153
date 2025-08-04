
const monedas = document.querySelectorAll(".coin")
const corazon = document.querySelector(".corazon")
const contadorMonedas = document.querySelector("#contador-monedas")
const contadorCorazones = document.querySelector("#contador-corazones")

console.log(monedas,corazon,contadorMonedas,contadorCorazones)

monedas.forEach( function(moneda){

  moneda.addEventListener( 'click', function () {
    moneda.classList.add('saltar')
  } ) 

} )
