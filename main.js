'use strict';


// Funzioni //

function creaAppendi(htmlElement, containerElement) {
    const casella = document.createElement(htmlElement);
    containerElement.append(htmlElement);
}

function assegnaClasse(classe, target) {
    target.classList.add(classe);
}

function facTotum (htmlElement, htmlClass) {
    const boardCell = document.createElement(htmlElement);
    boardCell.classList.add(htmlClass);
    containerBoard.append(boardCell);
}
//questi erano tentativi falliti


// Main  //
const containerBoard = document.querySelector('.board');

const casella = document.createElement('div');
casella.classList.add('cell');
containerBoard.append(casella);

facTotum('p', 'cell');
creaAppendi('p', containerBoard);
assegnaClasse('')
