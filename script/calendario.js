//Mostra Calendário Unidade São Paulo
function mostraSP() {
    document.getElementById('sp').style.display = 'block';
    document.querySelector('#confirma').style.display = 'none';

}
//conferir agendamento
function conferir() {
    document.getElementById('sp').style.display = 'none';
    document.querySelector('#confirma').style.display = 'block';
}

//Voltar após conferir dados de agendamento
function voltar() {
    document.getElementById('sp').style.display = 'block';
    document.querySelector('#confirma').style.display = 'none';
}
//Limpa a tela
function limpar() {
    document.getElementById('sp').style.display = 'none';
    const text = "";
    document.getElementById('nome').innerHTML = text;
    document.getElementById('email').innerHTML = text;
}

// Selecionar dia da semana que o usuário clicou
function capturaDia() {
    var diaSelecionado = document.querySelector('.cal-day__day--selected')
    console.log(diaSelecionado)

}