let km = prompt('inserisci i km da percorrere');
let age = prompt('inserisci l\'età');
let cost;
if((age > 0) && (age<18)){
    cost = ((km * 0.21) * 20) / 100;
}else if(age >= 65){
    cost = ((km * 0.21) * 40) / 100;
}else{
    cost = (km * 0.21);
}

let roundCost = (cost.toFixed(2));

console.log(roundCost);
alert(`Il costo del tuo biglietto è ${roundCost}€`);
