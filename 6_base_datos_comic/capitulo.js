
const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))
const container = document.querySelector(".container")

console.log("Te encuentras en el capitulo", id)

//Buscar capítulo en la base de datos
const capitulo = comic.capitulos.find(cap => cap.id === id)

console.log(capitulo)

//Mostrar la información del capitulo en pantalla
container.innerHTML = `
  <div class="card" style="width: 28rem;">
      <img src="${capitulo.imgPortada}" class="card-img-top" alt="...">
      <div class="card-body">
        <b>Capítulo ${capitulo.id}</b>
        <h5 class="card-title">${capitulo.nombreCap}</h5>
        <p class="card-text">${capitulo.descripcion}</p>
        <a href="#" class="btn btn-primary">Play</a>
      </div>
  </div>
`