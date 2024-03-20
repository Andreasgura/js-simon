/*
Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

let text = document.getElementById('text');
let button = document.querySelector('.btn');

/*button.addEventListener('click', function(){
   
});
*/

/*
creare una fz che genera un num casuale tra min e max
creare altra fz, che dato un array, generi numeri casuali non inclusi nello stesso 

ripetere l'operazione fin quando l'array non avrà raggiunto la lunghezza desiderata
*/

let array5 = (randomNotInArray(1, 100, 5 )) 
console.log(array5)

function randomNotInArray(min, max, myarrayLenght) {
    let myarray = []
    while (myarray.length < myarrayLenght) {
        let number = getRndInteger(min, max)
        if (!myarray.includes(number)) {
            myarray.push(number)
        }
    }
    
    
return myarray;
};