/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


const choice = prompt('pari o dispari');
const userNum = parseInt(prompt('inserisci un numero da 1 a 5'));
var randomNum = random(5,1);
var somma = sum(userNum,randomNum)
console.log("hai scelto: ", choice);
console.log("il numero scelto è: ", userNum);
console.log("il numero della cpu è: ", randomNum);
console.log(sum("la somma dei due numeri è: ", somma));
let oddEven = compare();




function random(max,min){
  return Math.floor(Math.random() * (max - min + 1) + min);
return randomNum;
}

function sum(n1,n2){
  numSum = n1 + n2;
  return numSum;
}

function compare(){
  if(somma % 2 === 0 && choice === "pari"){
    console.log('la somma dei numeri è pari - hai vinto');
  }else if(somma % 2 === 0 && choice === "dispari" ){
    console.log('la somma dei numeri è pari - hai perso')
  }else if ( !(somma % 2 === 0) && choice ==="dispari"){
    console.log('la somma dei numeri è dispari - hai vinto')
  }else{
    console.log('la somma dei numeri è dispari - hai perso')
  }
 }






 
