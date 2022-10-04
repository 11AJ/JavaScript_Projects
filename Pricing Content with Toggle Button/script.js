let input = document.getElementsByClassName('input')[0];
let basicsPrice = document.querySelector('.basic-price');
let professionalPrice = document.querySelector('.professional-price');
let masterPrice = document.querySelector('.master-price');

const Monthly = (event) =>{
    if(input.checked == true){
        basicsPrice.innerHTML = '$19.99';
        professionalPrice.innerHTML = '$24.99';
        masterPrice.innerHTML = '$39.99';
    }
    else{
        basicsPrice.innerHTML = '$199.99';
        professionalPrice.innerHTML = '$249.99';
        masterPrice.innerHTML = '$399.99';
    }
}


document.querySelector('.input').addEventListener('click',Monthly);