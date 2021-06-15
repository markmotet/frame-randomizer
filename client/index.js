/* 1) Create an instance of CSInterface. */
var csInterface = new CSInterface();

/* 2) Make a reference to your HTML button and add a click handler. */
var applyButton = document.querySelector("#apply-button");
applyButton.addEventListener("click", randomizeFrames);


/* 3) Write a helper function to pass instructions to the ExtendScript side. */
function randomizeFrames() {
  
  const filmIcon1 = document.getElementById("film-icon-1");
  const filmIcon2 = document.getElementById("film-icon-2");
  const filmIcon3 = document.getElementById("film-icon-3");

  // Start frame swapping animation
  filmIcon1.style.animation= "swap-1 0.7s infinite"
  filmIcon2.style.animation= "swap-2 0.7s infinite"
  filmIcon3.style.animation= "swap-3 0.7s infinite"

  const framesPerCut = document.getElementById("frames-per-cut-input").value;
  const colour = document.getElementById("colour-input").value;

  csInterface.evalScript("randomizeFrames()");

  // End frame swapping animation
  filmIcon1.style.animation= "swap-1 0.7s"
  filmIcon2.style.animation= "swap-2 0.7s"
  filmIcon3.style.animation= "swap-3 0.7s"
}