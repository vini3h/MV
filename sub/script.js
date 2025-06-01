// Pesquisa com filtro
document.getElementById('input-pesquisa').addEventListener('input', function () {
    const filtro = this.value.toLowerCase();
    const linhas = document.querySelectorAll('#tabela-itens tbody tr');
    const tabela = document.getElementById('tabela-itens');

    tabela.classList.toggle('hidden', filtro.length === 0);

    linhas.forEach(linha => {
        const textoItem = linha.textContent.toLowerCase();
        linha.style.display = textoItem.includes(filtro) ? '' : 'none';
    });
});

// Ativação do campo de busca
document.addEventListener("DOMContentLoaded", () => {
    const trilho = document.getElementById('trilho');
    const body = document.body;

    // Verifica e aplica o modo salvo
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark');
        trilho?.classList.add('dark');
    }

    // Adiciona o evento de clique no botão trilho
    trilho?.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark');
        trilho.classList.toggle('dark');
        localStorage.setItem('darkMode', isDark.toString());
    });
});

// Popup
const popup = document.getElementById('popup');

function handlePopup(open) {
    popup.classList.toggle('opened', open);
}

// Responsividade para menu (mantido caso use)
function changeSize() {
    if (window.innerWidth >= 600) {
        itens.style.display = 'flex';
    } else {
        itens.style.display = 'none';
    }
}

function clickMenu() {
    if (itens.style.display === 'flex') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'flex';
    }
}
