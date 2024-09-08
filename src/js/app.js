function pesquisar() {
  // Obtém a referência ao elemento HTML onde os resultados serão exibidos.
  const sectionResultados = document.getElementById("resultados-pesquisa");

  // Obtém o termo de pesquisa inserido pelo usuário e converte para minúsculas para tornar a busca case-insensitive.
  const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Verifica se o usuário inseriu algum termo de pesquisa.
  if (!termoPesquisa) {
    // Exibe uma mensagem de erro caso o campo de pesquisa esteja vazio.
    sectionResultados.innerHTML = "<p><b><mark>Nada foi encontrado. Certifique-se de digitar algo.</mark></b></p>";
    return;
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultadosHTML = "";

  // Itera sobre cada filme nos dados.
  for (const filme of dados) {
    // Converte o título, descrição e tags do filme para minúsculas para comparação com o termo de pesquisa.
    const tituloMinusculo = filme.titulo.toLowerCase();
    const descricaoMinuscula = filme.descricao.toLowerCase();
    const tagsMinusculas = filme.tags.toLowerCase();

    // Verifica se o termo de pesquisa está presente no título, descrição ou tags do filme.
    if (tituloMinusculo.includes(termoPesquisa) ||
        descricaoMinuscula.includes(termoPesquisa) ||
        tagsMinusculas.includes(termoPesquisa)) {
      // Se o filme corresponder à pesquisa, adiciona o HTML da div com os resultados à string.
      resultadosHTML += `
        <div class="item-resultado">
          <h2>${filme.titulo}</h2>
          <p class="descricao-meta">${filme.descricao}</p>
          <a href="${filme.link}" class="mais-sobre" target="_blank">Mais sobre</a> <!-- Link com classe -->
        </div>
      `;
    }
  }

  // Verifica se foram encontrados resultados.
  if (!resultadosHTML) {
    // Se nenhum resultado foi encontrado, exibe uma mensagem informando.
    resultadosHTML = "<p><mark>Nenhum filme foi encontrado.</mark></p>";
  }

  // Atualiza o conteúdo da seção de resultados com o HTML gerado.
  sectionResultados.innerHTML = resultadosHTML;
}
