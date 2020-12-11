//detecting Button pressed

var noOfDrums=document.querySelectorAll(".drum").length;

for(var i=0; i<noOfDrums; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonPressed = this.innerHTML;
  makeSound(buttonPressed);
  buttonAnimation(buttonPressed);
  });
}


//detecting key pressed

document.addEventListener("keydown",function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});


// Function for creating sound

function makeSound(key)
{
  switch (key) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
    case "k":
      var audio=new Audio("sounds/kick.mp3");
      audio.play();
    case "l":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
    default:

  }
}

function buttonAnimation(currentkey)
{
  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")},100);
}
//
