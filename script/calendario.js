//Mostra Calendário Unidade São Paulo
function mostraSP(){
    document.getElementById('sp').style.display = 'block';
    document.getElementById('santos').style.display = 'none';
}

//Mostra Calendário Unidade Santos
function mostraSantos(){
    document.getElementById('sp').style.display = 'none';
    document.getElementById('santos').style.display = 'block';
}

//Limpa a tela
function limpar(){
    document.getElementById('sp').style.display = 'none';
    document.getElementById('santos').style.display = 'none';
    const text = "";
    document.getElementById('nome').innerHTML = text;
    document.getElementById('email').innerHTML = text;
}
