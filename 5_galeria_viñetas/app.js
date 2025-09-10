
const monedas = document.querySelectorAll(".coin");
const corazones = document.querySelectorAll(".corazon");
const contadorMonedas = document.querySelector("#contador-monedas");
const contadorCorazones = document.querySelector("#contador-corazones");
let totalMonedas = 0;
let totalCorazones = 0;

/* console.log(monedas, corazon, contadorMonedas, contadorCorazones); */

monedas.forEach(function (moneda) {

    moneda.addEventListener("click", function () {
        moneda.classList.add("saltar");
        totalMonedas++
        contadorMonedas.textContent = totalMonedas

    })

})

corazones.forEach(function (corazon) {

    corazon.addEventListener("click", function () {
        corazon.classList.add("saltar");
        totalCorazones++;
        contadorCorazones.textContent = totalCorazones;
    })
})



///Galería

const escenas = document.querySelectorAll('.escena')
const btnAnterior = document.querySelector('.anterior')
const btnSiguiente = document.querySelector('.siguiente')
const miniaturas = document.querySelectorAll('.miniaturas img')
let indice = 0

//console.log(escenas) //Todas las escenas
//console.log(escenas[1]) //Solo la segunda escena

function mostrarEscena(i){
    //console.log(escenas[i])
    for (let j = 0; j < escenas.length; j++) {
        escenas[j].classList.remove("activa")
    }

    escenas[i].classList.add("activa")
    indice = i
}

//Botón siguiente
btnSiguiente.addEventListener("click", function(){
    indice = indice + 1
    if(indice >= escenas.length){
        indice = 0 //Para que vuelva a la primera escena
    }
    mostrarEscena(indice)
})

//Botón anterior
btnAnterior.addEventListener("click", function(){
    indice = indice - 1
    if(indice < 0){
        indice = escenas.length - 1 //Para que vaya a la última escena
    }
    mostrarEscena(indice)
})

//Miniaturas
miniaturas.forEach( (miniatura, i) => {
    miniatura.addEventListener("click", function(){
        mostrarEscena(i)
    })
});



