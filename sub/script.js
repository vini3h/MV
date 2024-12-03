document.getElementById('input-pesquisa').addEventListener('input', function() {
    const filtro = this.value.toLowerCase();
    const linhas = document.querySelectorAll('#tabela-itens tbody tr');
    const tabela = document.getElementById('tabela-itens');

    // Exibir a tabela apenas se houver uma pesquisa
    if (filtro.length > 0) {
        tabela.classList.remove('hidden'); // Exibe a tabela
    } else {
        tabela.classList.add('hidden'); // Esconde a tabela se a pesquisa estiver vazia
    }

    linhas.forEach(linha => {
        const textoItem = linha.textContent.toLowerCase();
        if (textoItem.includes(filtro)) {
            linha.style.display = ''; // Mostra a linha
        } else {
            linha.style.display = 'none'; // Esconde a linha
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const inputPesquisa = document.getElementById('input-pesquisa');

    inputPesquisa.addEventListener('input', function() {
        if (inputPesquisa.value.trim() !== '') {
            inputPesquisa.classList.add('active');
        } else {
            inputPesquisa.classList.remove('active');
        }
    });
});

// função popup
const popup = document.getElementById('popup');

function handlePopup(open) {
    if (open)
        popup.classList.add('opened');
    else
        popup.classList.remove('opened');
}