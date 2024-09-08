function pesquisar() {
    section = document.getElementById("resultado-pesquisa");
    campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let resultadoPesquisa = "";
    let encontrouResultado = false;
    
    for (let dado of dados) {
        if (dado.nome.toLowerCase().includes(campoPesquisa)) {
            encontrouResultado = true;
            section.style.display = "block";
            resultadoPesquisa += `
                <h2>${dado.nome}</h2>
                <p><strong>Descrição:</strong> ${dado.descricao}</p>
                <p><strong>Nacionalidade:</strong> ${dado.nacionalidade}</p>
                <p><strong>Modalidades:</strong> ${dado.modalidades}</p>
                <p><strong>Manobras icônicas:</strong> ${dado.manobrasIconicas}</p>
                <a href="${dado.wikipedia}" target="_blank">Saiba mais</a>
                `;
        }
        if (!encontrouResultado) {
            resultadoPesquisa = "<p>Skatista não encontrado!</p>";
    }
    section.innerHTML = resultadoPesquisa;
    
}
}  
   
  
  
