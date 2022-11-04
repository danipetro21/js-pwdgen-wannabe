//variabili

let nome;
let cognome;
let password;

// input utente

nome = window.prompt("Inserisci il tuo nome","Nome");
cognome = window.prompt("Inserisci il tuo cognome","Cognome");

// scrittura password su h1 by ID

document.getElementById("pass").innerHTML = (`${nome}${cognome}21`);
