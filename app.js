function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento no console para fins de depuração

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        // Constrói o HTML para cada item, incluindo o título, descrição e link
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}