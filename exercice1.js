// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let compteur = 0
let countUp = function() {
    setTimeout(function () {
        compteur++
      seconds.innerHTML = compteur.toString()
    countUp()
    }, 1000)
};
countUp()




// How can you make it stop counting?
let stopCountUp = function() {
}
let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

