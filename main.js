'use strict';




// function creaAppendi(htmlElement, containerElement) {
//     const casella = document.createElement(htmlElement);
//     containerElement.append(casella);
//     return casella;
// }


// function assegnaClasse(classe, target) {
//     target.classList.add(classe);
// }

// function facTotum (htmlElement, htmlClass) {
//     const boardCell = document.createElement(htmlElement);
//     boardCell.classList.add(htmlClass);
//     containerBoard.append(boardCell);
// }
// //questi erano tentativi falliti


// // Main  //
// const containerBoard = document.querySelector('.board');

// const casella = document.createElement('div');
// casella.classList.add('cell');
// containerBoard.append(casella);

// facTotum('p', 'cell');
// const x = creaAppendi('p', containerBoard);
// assegnaClasse('.cell', x);



// Funzioni //

function facTotum (htmlElement, cssClass, htmlContainer, valoreNumerazione) {
    const boardCell = document.createElement(htmlElement);
    boardCell.classList.add(cssClass);
    htmlContainer.append(boardCell);
    boardCell.innerText = valoreNumerazione;
    return boardCell;
}

function eviStampa (target, cssClass, htmlValue) {
    target.addEventListener('click', function(){
    target.classList.add(cssClass);
    console.log(htmlValue)
 })
}


function assegnaClasse(classe, target) {
    target.classList.add(classe);
}




// // Main  //

const containerBoard = document.querySelector('.board');
const start = document.getElementById('start');




start.addEventListener('click', function() {

    containerBoard.innerText = '';

    for (let i = 1; i <= 100; i++) {
        let x = facTotum('div','cell', containerBoard, i);
        //console.log(x);

        eviStampa(x, 'highlight', i);
    
    }
    
})



// cella.addEventListener('click', function(){
//     assegnaClasse('highlight', cella);
// })




