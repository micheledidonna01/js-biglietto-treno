//chiedere numero di km da percorrere
let km = prompt('inserisci i km da percorrere');

//chiedere l'età del passegero
let age = prompt('inserisci l\'età');

//inizializzo le variabili cost e discount
let cost;
let discount;

//se il passeggero ha un' età compresa tra i 0 e i 17 anni
if((age > 0) && (age < 18)){
    //il costo del biglietto si calcola moltiplicando i km con 0,21(costo al km)
    //applicando uno sconto del 20%
    cost = (km * 0.21);
    discount = (cost * 20) / 100;
    cost = cost - discount;
//altrimenti il passegero ha un'età superiore ai 65 anni
}else if(age >= 65){
    //il costo del biglietto si calcola moltiplicando i km con 0,21(costo al km)
    //applicando uno sconto del 40%
    cost = (km * 0.21);
    discount = (cost * 40) / 100;
    cost = cost - discount;
//altrimenti
}else{
    //il costo del biglietto si calcola moltiplicando i km con 0,21(costo al km)
    cost = (km * 0.21);
}

//arrotondare il costo del biglietto tenendo in considerazione solo le prime 2 cifre dopo la virgola
let roundCost = (cost.toFixed(2));

//visualizziamo il costo
console.log(roundCost);
alert(`Il costo del tuo biglietto è ${roundCost}€`);
