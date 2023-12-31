const page = document.getElementById('livros');

function showBooks(listaDeLibros){
  eValorTotalLibros.innerHTML = '';
  page.innerHTML = '';
  listaDeLibros.forEach(libro => {
  // let disponibilidad = verificaDisponibilidadLibro(libro)
    let disponibilidad = libro.quantidade > 0 ? 'libro__imags' : 'libro__imags indisponivel'
    page.innerHTML += `
    <div class="livro">
      <img class="${disponibilidad}" src="${libro.imagem}" alt="${libro.alt}" />
      <h2 class="livro__titulo">
      ${libro.titulo}
      </h2>
      <p class="livro__descricao">${libro.autor}</p>
      <p class="livro__preco" id="preco">${libro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${libro.categoria}</span>
      </div>
    </div>

    `
  })
}

