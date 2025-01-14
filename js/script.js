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


const dadoPlayer = document.getElementById('dado')

const cols = ['col-left', 'col-central', 'col-right']

let times = 3;
let dadoCols;
let blackDots;
for (let i = 0; i < cols.length; i++) {
    dadoCols = document.createElement('div')
    dadoCols.classList.add('col', cols[i])
    dadoPlayer.appendChild(dadoCols)
    for (let i = 0; i < times; i++) {
        blackDots = document.createElement('span')
        blackDots.classList.add('pallini')
        dadoCols.appendChild(blackDots)

    }
    console.log(dadoCols)
}



/* 
    <div class="col rotate active"><!-- dado-3 -->
    <span class="pallini"></span>
    <span class="pallini"></span>
    <span class="pallini"></span>
    </div>
    <div id="dado-1" class="col ">
    <span class="pallini "></span>
    </div>
    <div class="col">
    <span class="pallini"></span>
    <span class="pallini"></span>
    <span class="pallini"></span>
 
 */





/* <!-- 
rimuovere la classse activa al dado i per non renderlo visibile
al dado due active al primo elemento di ciuscuna col e dare active
 alla pimra col cosi che il elemento della prima col si allinii in basso
 
 
 
al lancio del dado 3 active solo alla col in centro che contienen il dado 1 che farsi che compaia elemnto nella col centrale
 
 
 
al lancio del dado 4 dare rimuvere lactive della prima col e anche di quella centrale poi dare active al secondo elemento di ciasquna col
 
al lancio della del dado 5 dare al active asolo alla col centrale
 
al lancio del dado 6 rimuovere la classe active dalla col centrale e dare tale classe a tutti gli elementi della col
--> */



/* Fase di preparazione */

//1. Recuperare l'elemento d'interesse all'interno del DOM.
const randomizer = document.getElementById('result');
let message;
const lanciaButton = document.getElementById('lancia');

/* Fase di Elaborazione */
const max = 6;

//2. Generare un Nr. ramdom per la cpu e inserirlo in console.
lanciaButton.addEventListener('click', function (e) {
    e.preventDefault
    const cpu = Math.floor(Math.random() * max) + 1;
    console.log(cpu);

    //3. Generare un Nr. ramdom per il giocatore e inserirlo in console.
    const player = Math.floor(Math.random() * max) + 1;
    console.log(player);

    /*4. Confrontare i due risultati ottenuti e indicare chi è il vincitore 
       in base a chi ha ottenuto il Nr più alto.*/
    if (cpu === player) {
        message = 'Nessuno ha vinto, hai ottenuto lo stesso nr. della cpu'
    } else {
        !(player > cpu) ? message = 'ha vinto la cpu' : message = 'hai vinto'
    }
    console.log(message)

    randomizer.innerHTML = `<span>cpu= ${cpu} player= ${player}</span> <p>${message}</p>`


    switch (player) {
        case 1:
            blackDots.classList.add('active')
            blackDots.classList.remove('active')
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            blackDots.classList.add('active')
            blackDots.classList.remove('active')

    }










})

/* Fase si Output */

//5. Stampare in pagina i due risultati e il nome del vincitore.



/******************************************************************/

/* ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
 */


/* 
STEPS

1. Creare una lista di email autorizzate

2. Recuperare gli elementi d'interesse all'interno del DOM.

3. Chiedere all'utente di inserire la sua email in un form.
    3.b  Raccogliere il dato inserito in una variabile.

4. Verificare che l'email inserita sia all'interno delle email autorizzate.    
    4.b Stampare in pagina se è una email autorizzata oppure no. 

*/


/* Fase di preparazione */

//1. Creare una lista di email autorizzate
const authorizedEmail = ['Donfulano@email.es', 'fulanito.email.es', 'mengano@email.es', 'zutano@email.es', 'perengano@email.es', 'Tizio@email.it', 'Caio@email.it', 'Sempronio@email.it']
console.table(authorizedEmail)

//2. Recuperare gli elementi d'interesse all'interno del DOM.
const emailField = document.getElementById('email')
const button = document.getElementById('form-btn')

/* Fase di gestione eventi */
/*3. Chiedere all'utente di inserire la sua email in un form.
3.b  Raccogliere il dato inserito in una variabile.*/
let messageLogin;
button.addEventListener('click', function (e) {
    e.preventDefault();
    const validEmail = emailField.value.trim();
    let validationMessage = document.getElementById('message-wrapper');
    if (!validEmail) {
        messageLogin = 'Non hai inserito nessuna email<br>Ps. Controlla i suggerimenti'
    } else {
        for (let i = 0; i < authorizedEmail.length; i++) {
            validEmail !== authorizedEmail[i] ? messageLogin = `${validEmail} : Non è una email valida<br>Ps. Controlla i suggerimenti`
                : messageLogin = `${validEmail} Mail valida, se autorizzato a procedere col login`;
            break
        }
    }


    validationMessage.innerHTML = messageLogin
    console.log(messageLogin);

    /* Fase di output */

    /*     validationMessage.classList.add('message');

    */
})

const students = ['Jose Manuel', 'Francesco', 'Placido'];
console.log(students)
// # SPLICE
// Aggiungiamo, rimuoviamo, sostituiamo elementi nell'array
// ? (posizione di partenza, quanti elementi da rimuovere, agggiunta1, aggiunta 2, ecc...)
// Rimuovo il secondo e il terz0
students.splice(1, 2);
console.log(students)


// Tolgo Daniele e aggiungo Gianni e Dordo
students.splice(1, 1, 'Gianni', 'Dordo');
console.log(students)
