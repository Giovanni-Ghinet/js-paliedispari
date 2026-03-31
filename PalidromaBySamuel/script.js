// funzione che verifica se la parola inserita è palindroma o no
function verificaPalindromo(testo) {

    if (typeof testo !== 'string' || testo === null) return false;

    // serve a evitare di avere una maiuscola e una minuscola che le considera diverse
    // il replace così elimina simboli ad esempio il punto esclamativo
    const stringaPulita = testo.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Se la stringa è vuota o ha 1 carattere, è palindromo
    if (stringaPulita.length <= 1) return true;
    
    for (let i = 0, j = stringaPulita.length - 1; i < j; i++, j--) {

    // Se un carattere non coincide con l'altro non è palindromo
    if (stringaPulita[i] !== stringaPulita[j]) {
      return false;
    }
  }

  // Se il loop termina vuol dire che è un palindromo
  return true;
}

// input della parola 
const inputUtente = prompt(' Inserisci una parola per verificare se è palindroma:');

// Invocazione della funzione
const risultato = verificaPalindromo(inputUtente);
console.log(risultato);