// 1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// 2 Stampare a schermo attraverso il for in tutte le proprietà.
// 3 Creare un array di oggetti di studenti.
// 4 Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// 5 Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// creo l'oggetto

var studente = {
  nome: 'Paolo',
  cognome: 'Rossi',
  eta: '25'
}

// stampo con for in
for ( var key in studente){
  console.log(studente[key]);
}


// creo un array di oggetti di studenti

var studenti = [
  {
    nome: 'Paolo',
    cognome: 'Rossi',
    eta: '25'
  },
  {
    nome: 'Marco',
    cognome: 'Bianchi',
    eta: '29'
  },
  {
    nome: 'Luca',
    cognome: 'Verdi',
    eta: '35'
  },

];
// ciclo e stampo
for (var i = 0; i < studenti.length; i++) {

}




//
