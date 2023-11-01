// Iteration 5: Store the player score and display it on the game over screen
var score_box = document.getElementById("score-board");

let show_score = localStorage.getItem("score");
score_box.textContent = show_score

var playagain = document.getElementById("play-again-button")
playagain.addEventListener("click", () =>{
    window.location.href = "index.html"
})