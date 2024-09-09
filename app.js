function pesquisar() {
    // Obtém o elemento HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor digitado no campo de pesquisa e o converte para letras minúsculas
    // Isso garante que a pesquisa não seja sensível a maiúsculas/minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Loop através de todos os itens do array 'dados'
    for (let dado of dados) {
        // Verifica se o ranking ou a descrição do game contém o termo pesquisado
        // Usamos `toLowerCase()` para fazer uma comparação insensível a maiúsculas/minúsculas
        if (dado.ranking.toLowerCase().includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa)) {
            // Se o termo for encontrado, cria-se um bloco de HTML contendo as informações do game
            resultados += `
            <div class="item-resultado">
                 <h3 class="ranking">${dado.ranking}</h3> <!-- Exibe a colocação no ranking -->
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a> <!-- Link com o título do game -->
                </h2>
                <p class="descricao-meta">${dado.descricao}</p> <!-- Descrição do game -->
                <a href="${dado.link}" target="_blank">Mais informações</a> <!-- Link para mais informações -->
                <div class="imagens">
                    <img src="${dado.imagem[0]}" alt="Imagem 1 de ${dado.titulo}" />
                    <img src="${dado.imagem[1]}" alt="Imagem 2 de ${dado.titulo}" />
                    <img src="${dado.imagem[2]}" alt="Imagem 3 de ${dado.titulo}" />
                
                </div>
            </div>
            `;
        }
    }

    // Caso nenhum resultado corresponda ao termo de pesquisa, exibe uma mensagem de "Nenhum game encontrado"
    if (resultados === "") {
        resultados = "<p>Nenhum game encontrado.</p>";
    }

    // Insere os resultados gerados (ou a mensagem de "Nenhum game encontrado") dentro do elemento HTML correspondente
    section.innerHTML = resultados;
}
