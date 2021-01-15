// 1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// 2 Stampare a schermo attraverso il for in tutte le proprietà.
// 3 Creare un array di oggetti di studenti.
// 4 Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// 5 Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


//1 creo l'oggetto

var studente = {
  nome: 'Paolo',
  cognome: 'Rossi',
  eta: '25'
}

// 2 stampo con for in
for ( var key in studente){
  // console.log(studente[key]);
}


// 3 creo un array di oggetti di studenti

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
// 4 ciclo e stampo
for (var i = 0; i < studenti.length; i++) {
  // console.log(studenti[i].nome,studenti[i].cognome);

}

// 5 uso 3 prompt e chiedo nome cognome ed eta

var nome = prompt('Inserisci il nome');
var cognome = prompt('Inserisci il cognome');
var eta = prompt('Inserisci l\'eta');

// 6 creo un ciclo e pusho i dati dell'utente nell'array studenti

var utente = {
  nome : nome,
  cognome : cognome,
  eta : eta
};

studenti.push(utente);

// 7 stampo tutto l'array anche con i dati dell'utente

for (var i = 0; i < studenti.length; i++) {
  for ( var key in studenti [i]){
    console.log(studenti[i][key]);
  }
}





//
