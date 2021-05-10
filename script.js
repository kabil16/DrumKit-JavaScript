for(let i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        let buttoninnerHtml = this.innerHTML;
        makeSound(buttoninnerHtml);
        makeAnimation(buttoninnerHtml);
    })
}
document.addEventListener("keypress",function(event){
    let key = event.key;
    makeSound(key);
    makeAnimation(key);
})


function makeSound(key){
switch (key) 
    {
                case "a" :
                    let tom1 = new Audio("./sounds/tom-1.mp3")
                    tom1.play();
                    break;
                case "s" :
                    let tom2 = new Audio("./sounds/tom-2.mp3")
                    tom2.play();
                    break;
                case "c" :
                    let tom3 = new Audio("./sounds/tom-3.mp3")
                    tom3.play();
                    break;
                case "u" :
                    let tom4 = new Audio("./sounds/tom-4.mp3")
                    tom4.play();
                    break;
                case "j" :
                    let snare = new Audio("./sounds/snare.mp3")
                    snare.play();
                    break;
                case "k" :
                    let kik = new Audio("./sounds/kick-bass.mp3")
                    kik.play();
                case "p" :
                    let crash = new Audio("./sounds/crash.mp3")
                    crash.play();
                default:
                    break;
    }
}

function makeAnimation(currentKey){
    let activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed")
    },100)
}