let panels= document.querySelectorAll('.panel');

const toggleOpen = (ok) =>{
    ok.target.classList.toggle('open');
}
// **Other Method**

// const toggleOpen = (event) => {
//     for(i=0 ; i< panels.length; i++){
//         panels[i].classList.remove('open');
//         }
//     event.target.classList.toggle('open');
// }

const hiddenPara = (e) =>{
    e.target.classList.toggle('moving-para');
}

panels.forEach(item => item.addEventListener('click',toggleOpen));

//**Other Method**
// for(j=0 ; j< panels.length ; j++){
//     panels[j].addEventListener('click',toggleOpen);
// }

panels.forEach(item => item.addEventListener("click", hiddenPara));
