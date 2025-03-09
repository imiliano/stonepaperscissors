//* Stone
export const btnStone = document.querySelector('.button-js-stone')
export const imgStone = 'https://media.istockphoto.com/id/627373186/es/foto/fondo-abstracto-de-textura-de-mar-de-guijarros-redondos-lisos.jpg?s=612x612&w=0&k=20&c=I69JBa0SZKtxDAU1oQuuFqQI0jsm0OqA5eJ7CykwFNI='

//* Paper
export const btnPaper = document.querySelector('.button-js-paper')
export const imgPaper = 'https://i.ebayimg.com/images/g/7GIAAOSw8T9gVMP5/s-l1600.jpg'

//* Scissors
export const btnScissors = document.querySelector('.button-js-scissors')
export const imgScissors = 'https://thumbs.dreamstime.com/b/pares-de-tijeras-18931433.jpg'

//* Divs
export const divResult = document.querySelector('.div-js-result');
export const divResultMachine = document.querySelector('.div-js-result-machine');
export const divPlayers = document.querySelector('.divPlayers')

//* Image player
export const img = document.createElement('img');

//* Image machine
export const img2 = document.createElement('img');

//* Machine
export let machineChoice = Math.round(Math.random() * 2);
export let machine = machineChoice;

//* Winner message
export const msjGanador = document.querySelector('.p-ganador');

//* Loser message
export const msjPerdedor = document.querySelector('.p-perdedor');

//* Tie message
export const msjEmpate = document.querySelector('.p-empate');

//* Spinner
export const spinner = document.querySelector('.spinner');