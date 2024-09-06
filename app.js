function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // Limpa o conteúdo da seção de resultados antes de adicionar novos resultados
    section.innerHTML = "";
    
    // Se o campo de pesquisa estiver vazio
    if (campoPesquisa === "") {
        // Cria um novo elemento de imagem
        const imagem = document.createElement('img');

        // Define o atributo src da imagem com o URL desejado
        imagem.src = 'https://media.tenor.com/eDchk3srtycAAAAj/piffle-error.gif'; // Substitua pelo URL da sua imagem

        // Adiciona a imagem ao elemento section
        section.appendChild(imagem);
        
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Se título, descrição ou tags contêm o texto pesquisado
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Adiciona o resultado à string de resultados
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
    }

    if(!resultados) {
       const imagem = document.createElement('img');

        // Define o atributo src da imagem com o URL desejado
        imagem.src = 'https://media.tenor.com/eDchk3srtycAAAAj/piffle-error.gif'; // Substitua pelo URL da sua imagem

        // Adiciona a imagem ao elemento section
        section.appendChild(imagem);
        
        return;
    }

    // Se não houver resultados, exibe a imagem de erro
    if (resultados === "") {
        const imagem = document.createElement('img');
        imagem.src = 'https://media.tenor.com/eDchk3srtycAAAAj/piffle-error.gif'; // Substitua pelo URL da sua imagem
        section.appendChild(imagem);
    } else {
        // Se houver resultados, exibe os resultados
        section.innerHTML = resultados;
    }
}
