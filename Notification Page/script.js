let number = document.getElementsByTagName('input');
let dots = document.querySelectorAll('.red-dot');
let row = document.querySelectorAll('.row');
let box = document.querySelectorAll('.content');

const readmessage = () => {
    
    let count= 0;
    let read = document.getElementsByClassName('read')[0];
    let unread = document.getElementsByClassName('unread')[0];
    // console.log(number[0].value);
    number[0].value = 0;
    read.style.display='none';
    unread.style.display='block';

    for (i=0 ; i<row.length ; i++){
        dots[i].style.display = 'none';
    }

}

document.querySelector('.read').addEventListener('click',readmessage);


const unreadmessage = () =>{
    
    let read = document.getElementsByClassName('read')[0];
    let unread = document.getElementsByClassName('unread')[0];
    let count = 0;
    
    read.style.display='block';    
    unread.style.display='none';

    for (i=0 ; i<row.length ; i++){
        count++;
        dots[i].style.display = 'inline-block';
    }
    console.log(count);
    document.querySelector('.input').value = 6;

}

document.querySelector('.unread').addEventListener('click',unreadmessage);
// const readByClick = (event) =>{
//     console.log(event.target);
// }

// dots.forEach(dot =>{
//     dot.style.display = 'none';
// })