let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1; 
let maximosIntentos = 3;

console.log(numeroSecreto); 

while (numeroSecreto != numeroUsuario) {
    
    numeroUsuario = parseInt(prompt("Me indicas un número de 1 a 100 por favor"));

    console.log(numeroUsuario); 
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el número: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos++;
        if (intentos > 3) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}


