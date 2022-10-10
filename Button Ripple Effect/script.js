const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', (event)=>{
    const x = (event.pageX - btn.offsetLeft);
    const y = (event.pageY - btn.offsetTop);

    console.log(x,y);
    btn.style.setProperty('--xpos', x + 'px');
    btn.style.setProperty('--ypos', y + 'px');
});