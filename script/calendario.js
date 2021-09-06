//Esconder e Mostrar Calendário 
const sp = document.getElementById("uni-sp");
const santos = document.getElementById("uni-s");

function calendarioSP(sp){
    let display = document.getElementById("sp").style.display;
    if(display == "none")
    document.getElementById(sp).style.display = 'block';
    else
        document.getElementById(sp).style.display = 'none';
}
calendarioSP(sp);
/*
function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    const santos = document.getElementById("uni-s");
    const sp = document.getElementById("uni-sp");
    if(sp === 1 )
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

function Mostracalendario(){
    var form = document.getElementById('#form');
    var botao = document.getElementById('#btn-ver');

    botao.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(form.unidade.value);
    });
}

*/