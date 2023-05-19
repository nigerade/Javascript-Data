function DataCorrente() {

    // Puxa a Data Atual
    let dataAtual = new Date();

    // Bom dia, Boa Tarde ou Boa Noite
    let cumprimento;

    // Puxa as Horas
    let hora = dataAtual.getHours();

    // HORA DO DIA ===============================================================
    if (hora >= 0 && hora < 12) {
        cumprimento = "Bom dia";
    }

    else if (hora >= 12 && hora < 18) {
        cumprimento = "Boa tarde";
    }

    else {
        cumprimento = "Boa noite";
    }
    // HORA DO DIA ===============================================================

    // ARRAYS ===============================================================
    let semana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    let diaSemana = semana[dataAtual.getDay()];

    let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    let mes = meses[dataAtual.getMonth()];
    // ARRAYS ===============================================================

    let dia = dataAtual.getDate();
    let ano = dataAtual.getFullYear();
    let minutos = dataAtual.getMinutes();

    // MOSTRA DIA, HORA E MINUTOS ====================================================
    if (dia < 10) {
        dia = '0' + dia;
    }

    if (hora < 10) {
        hora = '0' + hora;
    }

    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    // MOSTRA DIA, HORA E MINUTOS ====================================================

    // Concatena Tudo da Forma Pedida
    let dataFormatada = cumprimento + "! Hoje é " + diaSemana + ", " + dia + " de " + mes + " de " + ano + " - " + hora + ":" + minutos + "hs.";

    // Retorna o Resultado Final
    return dataFormatada;
}

// MOSTRA NA TELA NO H1
document.getElementById('data').textContent = DataCorrente();
