const buttons = document.querySelectorAll('.btn')
const eValorTotalLibros = document.getElementById('valor_total_livros_disponiveis')

buttons.forEach(button =>  button.addEventListener('click', filtrarLibros))

function filtrarLibros(){
  const button = document.getElementById(this.id)
  const categoria = button.value;

  let librosFiltrados = categoria == 'disponiveis' ? 

    filtrarPorDisponibilidad() : filtrarPorCategoria(categoria);

  showBooks(librosFiltrados)
  if(categoria == 'disponiveis'){
    let valorTotalLibros = calculaValorLibros(librosFiltrados)
    showPrice(valorTotalLibros)
    console.log('disponible', valorTotalLibros)
  }

}

function filtrarPorDisponibilidad(){
 return libros.filter(libro => libro.quantidade > 0) 
}
function filtrarPorCategoria(categoria){
 return libros.filter(libro => libro.categoria == categoria)
}

function showPrice(valorTotalLibros){
  eValorTotalLibros.innerHTML = `
  <section id="valor_total_livros_disponiveis">
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalLibros}</span></p>
    </div>
  </section>

  ` 
}

