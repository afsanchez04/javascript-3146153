
const tituloComic = document.querySelector(".titulo-comic")
const descripcionComic = document.querySelector(".descripcion-comic")
const imgComic = document.querySelector(".img-comic")
const listaCaps = document.querySelector(".lista-caps")

//Mostrar información de la base de datos en la página
tituloComic.textContent = comic.nombreComic
descripcionComic.textContent = comic.descripcion

//Imprimir información de capítulos
comic.capitulos.forEach(cap => {
  const li = document.createElement("li")
  li.innerHTML = `
    <a href="./capitulo.html?id=${cap.id}">
      <p>${cap.nombreCap}</p>
      <img src="${cap.imgPortada}" width="150" alt="">
    </a>
  `
  listaCaps.appendChild(li)
});