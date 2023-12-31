let btnOrdenarPrecio = document.getElementById('btnOrdenarPorPreco');

btnOrdenarPrecio.addEventListener('click', ordenarPorPrecio)

function ordenarPorPrecio(){
  let librosOrdenados = libros.sort((a, b) => a.preco - b.preco)
  showBooks(librosOrdenados)
console.log(librosOrdenados)
}
