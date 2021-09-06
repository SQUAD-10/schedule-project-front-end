//Contador de agendamentos
// OBS.: ALTERAR i<= 2 por i<=100 PARA PERFORMANCE REAL
var agenda = [0];

function agendaDia(){
    for (let i = 0; i <= 2; i++){
       agenda[i] = 1 * 1;
    }
   return agenda;
  
    
}
agendaDia()
console.log(`${agenda}`)  

//Bloqueio de novos agendamentos após atingir o limite
//OBS: ALTERAR 3 PELO ÍNDICE 99 PARA PERFORMANCE REAL
function limitePessoas (){
    if (agenda.length = 3)
    alert("Capacidade máxima ocupada, agende outro dia")
    document.getElementById('dia08').style.backgroundColor = 'grey';
    
}
