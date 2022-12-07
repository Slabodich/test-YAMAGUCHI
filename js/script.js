const upButton = document.querySelector(".table__up-btn");
const downButton = document.querySelector(".table__down-btn");
const upTablePart = document.querySelector(".table__top");

let heightCounter = 0;

upButton.addEventListener("click", function () {
  if (heightCounter < 3) {
    this.classList.remove("table__up-btn-disabled");
    downButton.classList.remove("table__down-btn-disabled");
    heightCounter++;
    upTablePart.style.top = `${heightCounter * -10}px`;
    if (heightCounter >= 3) {
      this.classList.add("table__up-btn-disabled");
    }
  } else {
    this.classList.add("table__up-btn-disabled");
  }
});

downButton.addEventListener("click", function () {
  if (heightCounter > -3) {
    this.classList.remove("table__down-btn-disabled");
    upButton.classList.remove("table__up-btn-disabled");
    heightCounter--;
    upTablePart.style.top = `${heightCounter * -10}px`
    if (heightCounter <= -3) {
      this.classList.add("table__down-btn-disabled");
    }
  } else {
    this.classList.add("table__down-btn-disabled");
  }
});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1" })
  // trigger animation by adding a css class
  .setClassToggle(".section-voice-control__girl-img", "zap")
  .addTo(controller);
