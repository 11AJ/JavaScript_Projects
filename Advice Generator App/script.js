const btn = document.querySelector('.btn');
const number = document.querySelector('.id');
const quote = document.querySelector('.quote');

const FetchAdvice = () =>{
    var req = new XMLHttpRequest();
    req.open('GET','https://api.adviceslip.com/advice');
    
    req.onload = () =>{
        var text = JSON.parse(req.responseText)
        var id = text.slip.id;
        var advice = text.slip.advice;
        console.log(text);
        console.log(id);
        console.log(advice);
        number.innerHTML = id;
        quote.innerHTML = advice;
    }

    req.send();
}
FetchAdvice();

btn.addEventListener('click',FetchAdvice);