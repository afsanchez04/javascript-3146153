
const params = new URLSearchParams(window.location.search)
const id = parseInt( params.get("id") )

console.log("Te encuentras en el capitulo",id)

//Buscar capítulo en la base de datos
const capitulo = comic.capitulos.find( cap => cap.id === id )

console.log(capitulo)