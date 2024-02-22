console.log("Ciao, il tuo js è ben collegato");

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

})
