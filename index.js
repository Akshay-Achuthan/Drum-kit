var numberofdrums = document.querySelectorAll(".drum").length;
// console.log(numberofdrums);

// button check

for (var i = 0; i < numberofdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonlistener = this.innerHTML;

    soundcheck(buttonlistener);
    buttonAnimation(buttonlistener);
  });
}

// keyboard check

document.addEventListener("keydown", function (event) {
  soundcheck(event.key);
  buttonAnimation(event.key);
});

function soundcheck(key) {
  switch (key) {
    case "W":
    case "w":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "A":
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "S":
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "D":
    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "J":
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "K":
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "L":
    case "l":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    default:
      console.log(buttonlistener);
      break;
  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
