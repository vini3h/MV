let totalNotas = 0;

function adicionarLinha() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const mv = document.getElementById('mv').value;
    const nota = parseFloat(document.getElementById('nota').value);

    if (!nome || !telefone || !mv || isNaN(nota)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    
    novaLinha.insertCell(0).innerText = nome;
    novaLinha.insertCell(1).innerText = telefone;
    novaLinha.insertCell(2).innerText = mv;
    novaLinha.insertCell(3).innerText = nota;

    // Adiciona o botão remover
    const cellAcoes = novaLinha.insertCell(4);
    const botaoRemover = document.createElement('button');
    botaoRemover.innerText = 'Remover';
    botaoRemover.onclick = function() {
        removerLinha(novaLinha, nota);
    };
    cellAcoes.appendChild(botaoRemover);

    totalNotas += nota;
    document.getElementById('totalNotas').innerText = totalNotas;

    // Limpar os campos após adicionar a linha
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('mv').value = '';
    document.getElementById('nota').value = '';
}

function removerLinha(linha, nota) {
    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    tabela.deleteRow(linha.rowIndex - 1); // Remove a linha da tabela
    totalNotas -= nota; // Atualiza o total de agendamentos
    document.getElementById('totalNotas').innerText = totalNotas; // Atualiza a exibição do total
}

function baixarTabela() {
    const tabela = document.getElementById('tabela');
    let csv = [];

    // Adiciona os cabeçalhos, excluindo a coluna de ações
    const headers = Array.from(tabela.getElementsByTagName('th'))
        .slice(0, 4) // Pega apenas as quatro primeiras colunas
        .map(th => th.innerText);
    csv.push(headers.join(','));

    // Adiciona as linhas, excluindo a coluna de ações
    const rows = tabela.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    for (let row of rows) {
        const cols = row.getElementsByTagName('td');
        const data = Array.from(cols)
            .slice(0, 4) // Pega apenas as quatro primeiras colunas
            .map(td => td.innerText);
        csv.push(data.join(','));
    }

    // Adiciona o total de notas
    csv.push(['', '', 'Total de Notas', totalNotas].join(','));

    // Cria o arquivo CSV
    const csvString = csv.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tabela.csv';
    document.body.appendChild(a); // Adiciona ao DOM
    a.click(); // Clica no link para iniciar o download
    document.body.removeChild(a); // Remove o link do DOM
    URL.revokeObjectURL(url); // Libera o objeto URL
}

// Outras funções permanecem inalteradas...
