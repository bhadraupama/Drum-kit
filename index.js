//for button press.
var noofbutton= document.querySelectorAll(".drum").length;
for(var i=0; i<noofbutton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
       var buttoninnerhtml= this.innerHTML;
        makesound(buttoninnerhtml);
        buttonanimation(buttoninnerhtml);
    
});

}
//detecting keyboard press.
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});
function makesound(key){
    switch (key) {
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            
            break;
        case "a":
            var a= new Audio("sounds/tom-2.mp3");
            a.play();
            break;
        case "s":
            var s= new Audio("sounds/tom-3.mp3");
            s.play();
            break;
        case "d":
            var d= new Audio("sounds/tom-4.mp3");
            d.play();
            break;
        case "j":
            var j= new Audio("sounds/snare.mp3");
            j.play();
            break;
        case "k":
            var k= new Audio("sounds/crash.mp3");
            k.play();
            break;
        case "l":
            var l= new Audio("sounds/kick-bass.mp3");
            l.play();
            break;
    
        default:console.log(buttoninnerhtml);
            break;
    }
}
function buttonanimation(currentKey){
    var activebutton= document.querySelector("."+ currentKey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
    
}



