
let imgList = new Array(
    "image01.jpg",
    "image02.jpg",
    "image03.jpg",
    "image04.jpg",
    "image05.jpg");
 let randomNum = Math.floor(Math.random() * imgList.length);
 let bgImg = document.querySelector('.container');
 bgImg.style.backgroundImage = 'url(/image/' + imgList[randomNum] + ')';

let playerInput = 16

function createDivs(playerInput){
    let container = document.querySelector('.container');
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }

    let df = document.createDocumentFragment();

    for(let i=1; i<= playerInput * playerInput; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'item');
        div.style.width = `calc( 100% / ${playerInput} )`;
        div.style.height = `calc( 100% / ${playerInput} )`;
        df.appendChild(div);
    }

    container.appendChild(df);

    let items = document.querySelectorAll('.item');
    items.forEach(item => item.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = '#333333';
    }));
}

createDivs(playerInput);

let clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', function(){
    createDivs(playerInput);
});

let changeButton = document.querySelector('.changeButton');
changeButton.addEventListener('click', function(){
    
    let regex = new RegExp(/^([1-9]\d*|0)$/);

    do {
        playerInput = prompt('How many squares per side? Enter a number from 1-64 range.');
    } while (!regex.test(playerInput) || playerInput < 1 || playerInput > 64);

    createDivs(playerInput);
});

let bonusButton = document.querySelector('.bonusButton');
bonusButton.addEventListener('click', function(){
    let container = document.querySelector('.container');
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }

    let df = document.createDocumentFragment();

    for(let i=1; i<= playerInput * playerInput; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'item');
        div.style.width = `calc( 100% / ${playerInput} )`;
        div.style.height = `calc( 100% / ${playerInput} )`;
        df.appendChild(div);
    }

    container.appendChild(df);

    let items = document.querySelectorAll('.item');
    items.forEach(item => item.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = 'transparent';
    }));

});