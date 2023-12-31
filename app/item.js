const divLibro = document.createElement('div').classList.add('libro');
const imgLibro = document.createElement('img').classList.add('libro__imags');
const h2LibTit = document.createElement('h2').classList.add('libro__titulo');
const pDescrip = document.createElement('p').classList.add('libro__descripcion');
const pPrecio = document.createElement('p').classList.add('libro__precio');
const divTags = document.createElement('div').classList.add('tags');

function aplicarDescuento(libros){
  const descuento = 0.3;
  libroconDescuento = libros.map(libro => {
  // console.log(libro)
    return {...libro, preco: libro.preco - (libro.preco * descuento)}
  })
  
  return libroconDescuento
}
