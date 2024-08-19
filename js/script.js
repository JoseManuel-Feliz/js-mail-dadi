console.log('JS OK')
/* 
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato */

/* 
1. Recuperare l'elemento d'interesse all'interno del DOM.

2. Generare un Nr. ramdom per la cpu e inserirlo in console.

3. Generare un Nr. ramdom per il giocatore e inserirlo in console.

4. Confrontare i due risultati ottenuti e indicare chi è il vincitore 
   in base a chi ha ottenuto il Nr più alto.

5. Stampare in pagina i due risultati e il nome del vincitore.
*/


/* Fase di preparazione */

//1. Recuperare l'elemento d'interesse all'interno del DOM.
const randomizer = document.getElementById('risultato');


/* Fase di Elaborazione */
const max = 6;

//2. Generare un Nr. ramdom per la cpu e inserirlo in console.
const cpu = Math.floor(Math.random() * max) + 1;
console.log(cpu);

//3. Generare un Nr. ramdom per il giocatore e inserirlo in console.
const player = Math.floor(Math.random() * max) + 1;
console.log(player);

