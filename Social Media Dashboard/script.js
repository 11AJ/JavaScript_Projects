let count = 0;
let main = document.getElementsByClassName('main')[0];
let headBox = document.querySelectorAll('.header-content-box');
let headBox2 = document.querySelectorAll('.box');

const lightTheme = () =>{
    
    if(count==0){
        main.style.background = 'white';
        main.style.color = 'black';
        for(i=0 ; i<headBox.length; i++){
            headBox[i].style.background = 'white';
        }
        for(i=0 ; i<headBox2.length; i++){
        headBox2[i].style.background = 'white';
        }
        count = 1;
        console.log('1');
    }
    else{
        main.style.background = 'rgb(20, 20, 65)';
        main.style.color = 'white';
        for(j=0 ; j<headBox.length; j++){
            headBox[j].style.background = 'rgb(41, 41, 114)';
        }
        for(j=0 ; j<headBox2.length; j++){
        headBox2[j].style.background = 'rgb(41, 41, 114)';
        }
        count = 0;
        console.log('0');

    }
}

document.querySelector('.slider').addEventListener('click',lightTheme);