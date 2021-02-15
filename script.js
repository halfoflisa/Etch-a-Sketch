let playerInput = 16
let bgColor = '#333333';

function createDivs(playerInput, bgColor){
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
        e.target.style.backgroundColor = bgColor;
    }));
}

createDivs(playerInput, bgColor);

let clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', function(){
    bgColor = '#333333';
    createDivs(playerInput, bgColor);
});

let changeButton = document.querySelector('.changeButton');
changeButton.addEventListener('click', function(){
    let regex = new RegExp(/^([1-9]\d*|0)$/);
    do {
        playerInput = prompt('How many squares per side? Enter a number from 1-64 range.');
    } while (!regex.test(playerInput) || playerInput < 1 || playerInput > 64);
    createDivs(playerInput, bgColor);
});

let bonusButton = document.querySelector('.bonusButton');
bonusButton.addEventListener('click', function(){
    bgColor = 'transparent';
    let imgList = new Array(
        "image01.jpg",
        "image02.jpg",
        "image03.jpg",
        "image04.jpg",
        "image05.jpg");
     let randomNum = Math.floor(Math.random() * imgList.length);
     let bgImg = document.querySelector('.container');
     bgImg.style.backgroundImage = 'url(/image/' + imgList[randomNum] + ')';
     createDivs(playerInput, bgColor);
});