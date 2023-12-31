// const page = document.getElementById('livros');
let libros = []

const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscaLibrosApi()

async function getBuscaLibrosApi(){
  const res = await fetch(endpointApi)
  libros = await res.json()
  let libroconDescuento = aplicarDescuento(libros)
  console.table(libros)
  showBooks(libroconDescuento)
}


