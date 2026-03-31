// Funzione che genera il numero del computer da 1 a 5
function generazioneNumeroDelComputer() {
    const min = 1;
    const max = 5;
    // Math.random() dà 0 a 0.999, moltiplicato per l'intervallo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione che esegue la somma del mio numero e del numero del computer
function determinaSituazione(numeroUtente, numeroComputer) {
    const somma = numeroUtente + numeroComputer;
    // Se il resto della divisione per 2 è 0, è PARI
    const divisibile = somma % 2 === 0;
    return divisibile ? "PARI" : "DISPARI";
}

// variabili per pari o dispari
let inputPariDispari = "";
let sceltaValida = false;

// Ciclo while per chiedere se scegli pari o dispari, non si ferma finchè non metti la risposta corretta

while (!sceltaValida) {
    inputPariDispari = prompt("Scegli PARI o DISPARI:");
    const sceltaNormalizzata = inputPariDispari.toUpperCase().trim();
    
    if (["PARI", "DISPARI"].includes(sceltaNormalizzata)) {
        sceltaValida = true;
        
    } else {
        alert(`Errore: ${inputPariDispari}. Scrivi PARI o DISPARI.`);
    }
}

const sceltaCorretta = inputPariDispari.toUpperCase().trim();



// variabili per il numero dell'utente
let inputNumero = "";
let numeroValido = false;

// Ciclo while per chiedere il numero tra (1-5), non si ferma finchè non metti la risposta corretta
while (!numeroValido) {
    inputNumero = prompt(`Inserisci un numero tra 1 e 5:`);

    // Rimuove spazi vuoti
    inputNumero = (inputNumero || "").trim();

    // Convertiamo in numero
    const numeroTest = parseInt(inputNumero);

    // Controllo se è un numero tra 1 e 5?
    if (!isNaN(numeroTest) &&numeroTest >= 1 &&numeroTest <= 5) {

        numeroValido = true; // L'input è corretto
        
    } else {
        alert(`Errore: ${inputNumero}`);
        if (!isNaN(numeroTest)) {
            alert(`Il numero deve essere tra 1 e 5!`);
        } else {
            alert(`Inserisci solo un numero (niente lettere)!`);
        }
    }
}

const numeroFinale = parseInt(inputNumero);


// invocazione della funzione
const numeroDelComputer = generazioneNumeroDelComputer();

// somma tra i 2 numeri
const sommaTotale = numeroFinale + numeroDelComputer;

//invocazione della funzione per il controllo se pari o dispari
const situazione = determinaSituazione(numeroFinale, numeroDelComputer);


// console.log per stampare le variabili

console.log(`Tu hai scelto: ${inputNumero}`);
console.log(`Computer ha scelto: ${numeroDelComputer}`);
console.log(`Somma totale: ${sommaTotale}`);
console.log(`Situazione: ${situazione}`);
console.log(`Hai scelto: ${sceltaCorretta}`);
console.log(`${sceltaCorretta === situazione ? "Hai vinto" : "Hai perso, vittoria del computer"}`);