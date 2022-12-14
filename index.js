
document.querySelector("button").addEventListener("click", handleClick)
for (var i  =  0; i <= 6; i++) {   
document.querySelectorAll("button")[i].addEventListener("click", handleClick)   
}
function  handleClick(){
    
  var buttonInnerHTML = this.innerHTML

  buttonAnimation(buttonInnerHTML)
  
    // var clickedAudio = this
    // if(clickedAudio === document.querySelectorAll("button")[0]){
    //     var audio = new Audio('sounds/tom-1.mp3');
    //     audio.play();
    // }
    // else if (clickedAudio === document.querySelectorAll("button")[1]){
    //     var audio = new Audio('sounds/tom-2.mp3');
    // audio.play();
    // }
    // else if (clickedAudio === document.querySelectorAll("button")[2]){
    //     var audio = new Audio('sounds/tom-3.mp3');
    // audio.play();
    // }
    // else if (clickedAudio === document.querySelectorAll("button")[3]){
    //     var audio = new Audio('sounds/tom-4.mp3');
    // audio.play();
    // }
    // else if (clickedAudio === document.querySelectorAll("button")[4]){
    //     var audio = new Audio('sounds/snare.mp3');
    // audio.play();
    // }
    // else if (clickedAudio === document.querySelectorAll("button")[5]){
    //     var audio = new Audio('sounds/crash.mp3');
    // audio.play();
    // }
    // else if (clickedAudio === document.querySelectorAll("button")[6]){
    //     var audio = new Audio('sounds/kick-bass.mp3');
    // audio.play();
    // }
var sound = this.innerHTML
    switch (sound) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
                break;
                case "s":
                    var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                    break;
                    case "d":
                        var tom4 = new Audio('sounds/tom-4.mp3');
                        tom4.play();
                        break;
                        case "j":
                            var snare = new Audio('sounds/snare.mp3');
                            snare.play();
                            break;
                            case "k":
                                var crash = new Audio('sounds/crash.mp3');
                                crash.play();
                                break;
                                case "l":
                                    var kickBass = new Audio('sounds/kick-bass.mp3');
                                    kickBass.play();
                                    break;        
        default:
            break;
    }
}

document.addEventListener("keydown", function (event){
    makeSound(event.key)
    buttonAnimation(event.key)

    })
  function makeSound(key){
   switch (key) {
    case "w":
        var tom2 = new Audio('sounds/tom-1.mp3');
        tom2.play();
        break;

        case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
        case "s":
        var tom2 = new Audio('sounds/tom-3.mp3');
        tom2.play();
        break;
        case "d":
            var tom2 = new Audio('sounds/tom-4.mp3');
            tom2.play();
            break;
            case "j":
        var tom2 = new Audio('sounds/snare.mp3');
        tom2.play();
        break;
        case "k":
        var tom2 = new Audio('sounds/crash.mp3');
        tom2.play();
        break;
        case "l":
        var tom2 = new Audio('sounds/kick-bass.mp3');
        tom2.play();
        break;
   }}



// 2 decision (easier than first   )

// document.querySelector("button").addEventListener("click", function (){
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
// })
// document.querySelectorAll("button")[1].addEventListener("click", function (){
//     var audio = new Audio('sounds/tom-2.mp3');
//     audio.play();
// })
// document.querySelectorAll("button")[2].addEventListener("click", function (){
//     var audio = new Audio('sounds/tom-3.mp3');
//     audio.play();
// })
// document.querySelectorAll("button")[3].addEventListener("click", function (){
//     var audio = new Audio('sounds/tom-4.mp3');
//     audio.play();
// })
// document.querySelectorAll("button")[4].addEventListener("click", function (){
//     var audio = new Audio('sounds/snare.mp3');
//     audio.play();
// })
// document.querySelectorAll("button")[5].addEventListener("click", function (){
//     var audio = new Audio('sounds/crash.mp3');
//     audio.play();
// })
// document.querySelectorAll("button")[6].addEventListener("click", function (){
//     var audio = new Audio('sounds/kick-bass.mp3');
//     audio.play();
// })
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 300)
}