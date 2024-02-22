console.log("Ciao, il tuo js è ben collegato");



//MAIL
//Dichiaro un array con all'interno una serie di stringhe
let mails = ['pippo@gmail.com', 'pippobaudo@gmail.com',
    'pippofranco@gmail.com', 'pippoganna@gmail.com'];

//Dichiaro una variabile 
let user_mail = 0;

//Assegno a questa variabile un valore tramite input
document.querySelector('.my_button').addEventListener('click', function () {
    user_mail = document.getElementById("my_mail").value;
    console.log("Hai inserito i seguenti valori", user_mail);


    //Confronto ogni elemento dell'array con l'input
    let result = 0;
    for (let index = 0; index < mails.length; index++) {

        // SE è tra i miei array -> True
        // ->  Non mi interessa continuare e faccio finire l'iter
        if (user_mail == mails[index]) {
            result = true;
            index = mails.length;
        }
        //SE NO -> False e continuo l'iter
        else {
            result = false;
        }
    }
    console.log(result);


    //BONUS 1
    //Dichiaro una variabile e la collego all'elemento del DOM in cui voglio che esca il risultato
    const rowElement = document.querySelector('.my_row');
    // Creo un Elemento attraverso una variabile appena finisco le verifiche
    const addresultElement = document.createElement('div');
    if (result == true) {
        //SE è TRUE -> CODICE
        addresultElement.innerHTML =
            `<div class="col-12 py-2 px-5"> <div class="card bg-success">
        <p class="fw-bold text-center">SEI DEI NOSTRI</p></div></div>`;
    }
    else {
        //SE NO -> ALTRO CODICE
        addresultElement.innerHTML =
            `<div class="col-12 py-2 px-5"> <div class="card bg-warning">
        <p class="fw-bold text-center">CAMBIA NOME IN PIPPO</p></div></div>`;
    }

    rowElement.append(addresultElement)
})



//GIOCO DEI DADI

//Dichiaro due variabili
//Attivo il tiro dei dadi con un pulsante
document.querySelector('.lucky_button').addEventListener('click', function () {
    let user_number = 0;
    let pc_number = 0;
    //Assegno loro un valore random
    user_number = Math.floor(Math.random() * 7);
    console.log("Hai inserito i seguenti valori", user_number);
    pc_number = Math.floor(Math.random() * 7);
    console.log("Hai inserito i seguenti valori", pc_number);

    //Confronto i due valori
    //Dichiaro il vincitore o il pareggio
    if (user_number > pc_number) {
        console.log("Hai vinto!");
        //Stampo con un Alert
        alert("HAI VINTO " + user_number + " a " + pc_number)
    } else if (user_number < pc_number) {
        console.log("Ha vinto l'IA! ");
        //Stampo con un Alert
        alert("L' IA HANNO VINTO " + pc_number + " a " + user_number)
    } else {
        console.log("Pareggio! ");
        //Stampo con un Alert
        alert("PAREGGIO " + pc_number + " a " + user_number)
    }
})