/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


//Dichiaro gli elementi del dom.
let word;
let input = document.getElementById('insert-word');
const btn = document.querySelector('.btn-np');
const output = document.querySelector('#output');
// Invoco la Funzione tramite l'eventListener del bottone
 btn.addEventListener('click', function(){
  reverse(word);
})
input.addEventListener('keypress', function(e){
  if(e.key ==='Enter'){
  reverse(word);
}
})
// Creo la mia funzione
 function reverse(wordToCheck) {
  input.focus();
  word = document.querySelector('#insert-word').value;
  if(word.length < 3){
  output.innerText = "La parola non soddisfa i requisiti minimi";
  return ;
}else{
  let reversedWord = ''
  for(let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i]
    }
    if (reversedWord.toLowerCase() === word.toLowerCase()){
      output.innerText = "La parola è palindroma";
      word = "";
      input.value ="";
    }else{
      output.innerText = "La parola non è palindroma";
      word = "";
      input.value ="";
    }
    return reversedWord;
  }
}
