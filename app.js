let numeroSecreto = 0;
let intentos = 0;
let ListaNumerosSorteados = [];
let NumeroMaximo = 10;
function AsignarTextoElmento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}
function VerificarIntento() {
    let NumeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    if (numeroSecreto === NumeroDeUsuario) {
        AsignarTextoElmento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (NumeroDeUsuario > numeroSecreto) {
            AsignarTextoElmento('p', "El número secreto es menor")
        } else {
            AsignarTextoElmento('p', "El número secreto es mayor")
        }
        intentos++;
        LimpiarCaja();
    }
    return;
}

function LimpiarCaja() {
    document.getElementById('ValorUsuario').value = '';
}
function GenerarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random() * NumeroMaximo) + 1;
    // Si ya sorteamos todos los numeros
    if (ListaNumerosSorteados.length == NumeroMaximo) {
        AsignarTextoElmento('p', 'Ya se sortearon todos los numeros posibles')

    } else {
        //Si el numero generado esta en la lista 
        if (ListaNumerosSorteados.includes(NumeroGenerado)) {
            return GenerarNumeroSecreto();
        } else {
            ListaNumerosSorteados.push(NumeroGenerado);
            return NumeroGenerado
        }
    }
}

function CondicionesIniciales() {
    AsignarTextoElmento("h1", "Juego del número secreto!");
    AsignarTextoElmento("p", `Indica un número del 1 al ${NumeroMaximo}`);
    numeroSecreto = GenerarNumeroSecreto();
    intentos = 1;
}
function ReiniciarJuego() {
    //Limpiar caja, indicar mensaje de intervalo de numeros, generar el numero aleatorio, deshabilitar el boton de nuevo juego, inicializar el contador.
    LimpiarCaja();
    CondicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

CondicionesIniciales();
