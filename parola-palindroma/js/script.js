/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


//Dichiaro gli elementi del dom.

const btn = document.querySelector('.btn-np');
const output = document.querySelector('#output');

// Invoco la Funzione tramite l'eventListener del bottone
 btn.addEventListener('click', myfunction)

//creo la funzione per controllare se la parola è palindroma o meno

function myfunction(wordToCheck){
  let word = document.querySelector('#insert-word').value;
  let char;
  let array = [];
  let invertedWord;
  // Creo un for che cicla fino a che "i" è minore della lunghezza della parola data
  for(let i = 0; i < word.length; i++){
    char = word[i];
    array.push(char);
  }
  invertedWord = array.reverse(char);
  console.log(invertedWord);
  if(invertedWord = word){
    
  }
  word ='';
 

}