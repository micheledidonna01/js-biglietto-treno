# Biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero, calcolando il costo del suo biglietto con sconti che possono variare in base a delle condizioni indicate.

## Soluzione
- chiedere numero di km da percorrere
- chiedere l'età del passegero
- se il passeggero ha un' età compresa tra i 0 e i 17 anni 
    - il costo del biglietto sarà calcolato moltiplicando i km con 0,21(costo al km) applicando uno sconto del 20%
- altrimenti il passegero ha un'età superiore ai 65 anni
    - il costo del biglietto sarà calcolato moltiplicando i km con 0,21(costo al km) applicando uno sconto del 40%
- altrimenti
    - il costo del biglietto sarà calcolato moltiplicando i km con 0,21(costo al km) 
- stampare il costo del biglietto del passegero