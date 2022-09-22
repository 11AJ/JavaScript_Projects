// show Menu via hamburger click
let hamburger = document.getElementsByClassName('hamburger')[0];
let slideMenu = document.getElementsByClassName('right-slide-menu')[0];

function showSlidePanel(){
    slideMenu.style.display= 'block';
}

document.querySelector('.hamburger').addEventListener('click', showSlidePanel);


// close menu via cross crossButton
let crossButton = document.querySelector('.btn-2');

const exitSlidePanel = () =>{
    slideMenu.style.display = 'none';
}

document.querySelector('.btn-2').addEventListener('click', exitSlidePanel);


// dropdown for big screen
let dropMenu1 = document.querySelector('.drop-1');
let drop1 = document.querySelector('.dropdown-1');
let dropMenu2 = document.querySelector('.drop-2');
let drop2 = document.querySelector('.dropdown-2');

function dropdownBig1(){
    drop1.classList.toggle('show');
}
function dropdownBig2(){
    drop2.classList.toggle('show');
}

document.querySelector('.drop-1').addEventListener('click',dropdownBig1);
document.querySelector('.drop-2').addEventListener('click',dropdownBig2);



// dropdown for mobile screen
let slideDropMenu1 = document.querySelector('.slide-drop-1');
let slideDrop1 = document.querySelector('.slide-dropdown-1');

let slideDropMenu2 = document.querySelector('.slide-drop-2');
let slideDrop2 = document.querySelector('.slide-dropdown-2');

function slidedropdownSmall1(){
    slideDrop1.classList.toggle('show');
    console.log('1');
}
function slidedropdownSmall2(){
    slideDrop2.classList.toggle('show');
    console.log('2');
}

document.querySelector('.slide-drop-1').addEventListener('touchstart',slidedropdownSmall1);
document.querySelector('.slide-drop-2').addEventListener('touchstart',slidedropdownSmall2);