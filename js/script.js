console.log('JS OK')
/* 
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato */

/* 
STEPS
 
1. Recuperare l'elemento d'interesse all'interno del DOM.

2. Generare un Nr. ramdom per la cpu e inserirlo in console.

3. Generare un Nr. ramdom per il giocatore e inserirlo in console.

4. Confrontare i due risultati ottenuti e indicare chi è il vincitore 
   in base a chi ha ottenuto il Nr più alto.

5. Stampare in pagina i due risultati e il nome del vincitore.
*/


/* Fase di preparazione */

//1. Recuperare l'elemento d'interesse all'interno del DOM.
const randomizer = document.getElementById('result');
let message;

/* Fase di Elaborazione */
const max = 6;

//2. Generare un Nr. ramdom per la cpu e inserirlo in console.
const cpu = Math.floor(Math.random() * max) + 1;
console.log(cpu);

//3. Generare un Nr. ramdom per il giocatore e inserirlo in console.
const player = Math.floor(Math.random() * max) + 1;
console.log(player);

/*4. Confrontare i due risultati ottenuti e indicare chi è il vincitore 
   in base a chi ha ottenuto il Nr più alto.*/
if (cpu === player) {
    message = 'Nessuno ha vinto, hai ottenuto lo stesso nr. della cpu'
    console.log(message)
} else {
    if (!(player > cpu)) {
        message = 'ha vinto la cpu'
        console.log(message)
    } else {
        message = 'hai vinto'
        console.log(message)
    }
}

/* Fase si Output */

//5. Stampare in pagina i due risultati e il nome del vincitore.
randomizer.innerHTML = `<span>cpu= ${cpu} player= ${player}</span> <p>${message}</p>`



/******************************************************************/

/* ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?
:avviso: NOTE:
- è vietato utilizzare il metodo includes()
- La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
- Non è necessario usare il tag <form>, ma se lo usate, ricordate di impedire il comportamento di default dell'evento altrimenti il form ricaricherà la pagina. In alternativa, potete impostare il type="button" sul <button> .
- L'esito del controllo deve essere stampato in pagina */


/* 
STEPS

1. Creare una lista di email autorizzate

2. Recuperare gli elementi d'interesse all'interno del DOM.

3. Chiedere all'utente di inserire la sua email in un form.
    3.b  Raccogliere il dato inserito in una variabile.

4. Verificare che l'email inserita sia all'interno delle email autorizzate.    
    4.b Stampare in pagina se è una email autorizzata oppure no. 

*/