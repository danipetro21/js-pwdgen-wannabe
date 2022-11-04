//variabili

let nome;
let cognome;
let coloreP;
let password;

// input utente

nome = window.prompt("Inserisci il tuo nome","Nome");
cognome = window.prompt("Inserisci il tuo cognome","Cognome");
coloreP = window.prompt("Inserisci il tuo colore preferito","Colore preferito");

// scrittura password su h1 by ID

document.getElementById("pass").innerHTML = (`${nome}${cognome}${coloreP}21`);
