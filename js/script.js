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
let elContainer = document.querySelector('.container')
let box;
let secondPartGame = document.getElementById('user-choice')
let elUserChoise = document.getElementById('btn-user-choice')
button.addEventListener('click', play );
secondPartGame.addEventListener('click', function(e) {
    e.stopPropagation();
    let userNumbers = document.querySelectorAll('#user-choice>input')
    console.log(userNumbers);
    for (let index = 0; index < userNumbers.length; index++) {
        const number = userNumbers[index].value;
        console.log(number);
    }
    
});

/*

*/

function play() {
    elContainer.innerHTML = '';
    let arrayPC = (randomNotInArray(1, 100, 5 ));
    setTimeout (hideNumbers, 5000);
    setTimeout (showSecondButton, 5000);  
}
// function receiveUserNumbers(event) {
//     let userNumbers = document.querySelectorAll('#user-choice>input')
//     console.log(userNumbers);
//     for (let index = 0; index < userNumbers.length; index++) {
//         const number = userNumbers[index].value;
//         console.log(number);
//     }
//     event.stopPropagation();
// }

function hideNumbers() {
    const boxes = document.querySelectorAll('.box');
    for(let i = 0; i < boxes.length; i ++) {
    boxes[i].innerHTML = '?'
    }
}

function randomNotInArray(min, max, myarrayLenght) {
    let myarray = []
    while (myarray.length < myarrayLenght) {
        let number = getRndInteger(min, max)
        if (!myarray.includes(number)) {
            myarray.push(number)
        }
        box = document.createElement('div')
        box.classList.add('box')
        box.innerHTML = number
        elContainer.appendChild(box)
    }

    return myarray;
};

function showSecondButton () {
    secondPartGame.classList.remove('invisible')
};