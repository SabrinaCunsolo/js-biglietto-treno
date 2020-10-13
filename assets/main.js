// Calcolo del biglietto del treno
// Il programma deve chiedere all'utente il numero di km da percorrere e la sua età.
// Con i dati inseriti deve quindi calcolare il corretto costo del biglietto in base a queste regole:
// il prezzo del biglietto dipende dalla distanza da percorrere e costa € 0.21 / km
// è previsto uno sconto del 20% per il minorenni
// gli over 65 hanno diritto ad uno sconto del 40%

// Chiedo ad utente km da percorrere
var km_utente = parseInt(prompt("Inserisci il numero di km da percorrere", ""));

// Chiedo ad utente eta
var eta_utente = parseInt(prompt("Qual è la tua età?", ""));

// prezzo biglietto a km
var prezzo_km = 0.21;

// prezzo per km
var prezzo_biglietto = prezzo_km * km_utente;

// // sconto minorenni
// var sconto_minorenni = prezzo_biglietto * (20 / 100);
//
// // sconto anziani
// var sconto_anziani =  prezzo_biglietto * (40 / 100);

if (eta_utente < 18) {
    document.write("You pay (" + (prezzo_biglietto * 0.8) + ")");
} else if (eta_utente > 65) {
    document.write("You pay (" + (prezzo_biglietto * 0.6) + ")");
} else {
    document.write("You pay ("+ prezzo_biglietto + ")");
}
