
//repeticiones
const numeroDeJuegos = parseInt(prompt("¿Cuántas veces quieres jugar?"));

  for (let i = 0; i < numeroDeJuegos; i++) {

//juego
let player
let pc

function aleatorio() {
    return Math.ceil(Math.random() * 3);
}

player = prompt("Elige: 1 = piedra ✊, 2 = papel 🖐️ ó 3 = tijera ✌️").toLowerCase();
pc = aleatorio();
alert('tu elegiste: ' + eleccion(player))
alert('El pc elegió: ' + eleccion(pc))

if (player == pc) {
    alert("Empate 🙌");
} else if (player == 1 && pc == 3) {
    alert("Ganaste! 🤗");
} else if (player == 2 && pc == 1) {
    alert("Ganaste! 🥰");
} else if (player == 3 && pc == 2) {
    alert("Ganaste! 😎");
} else {
    alert("Perdiste 🤡");
}

function eleccion(jugada) {
    let resultado = "" ;
    if (jugada == "1") {
        resultado = "piedra 🪨";
    } else if (jugada == "2") {
        resultado = "papel 🧻";
    } else if (jugada == "3") {
        resultado = "tijera ✂️";
    } else{
        resultado = "Tu elección es incorrecta";
    }
    return resultado;
}
  }