function calculaValorLibros(libros){
  return libros.reduce((acc, libro) =>  acc + libro.preco, 0)

}

