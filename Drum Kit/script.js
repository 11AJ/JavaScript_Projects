window.addEventListener("keydown",function(e){  
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key=document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio)
        return;
    audio.play();
    audio.currentTime=0;
    console.log(key);
    key.classList.add('playing');
    this.setTimeout

    function removetransition(e){
        if(e.propertyName !=="transform")
            return;
        key.classList.remove('playing');
    }
    let keys=document.querySelectorAll('.key');
    keys.forEach(keys => key.addEventListener('transitionend',removetransition))
});