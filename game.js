// Iteration 2: Generate 2 random numbers and display them on the screen
var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
var time = document.getElementById("timer");
var timerInterval;
var score = 0;

// Initialize the timer with 5 seconds
var timer = 6;

function updatescore(){
    localStorage.setItem("score", score);
    window.location.href = "gameover.html";
}
const random_numbers = () => {
    // Clear the previous timer interval
    if (timerInterval) {
        clearInterval(timerInterval);
        
    }

    var number1 = Math.floor(Math.random() * 100 + 1); 
    var number2 = Math.floor(Math.random() * 100 + 1); 
    num1.innerHTML = number1;
    num2.innerHTML = number2;

    timer = 6;
    timerInterval = setInterval(tim, 1000);
}

random_numbers();

// Iteration 3: Make the options button functional
var greater_than = document.getElementById("greater-than");
var equal_to = document.getElementById("equal-to");
var lesser_than = document.getElementById("lesser-than");

greater_than.addEventListener("click", () => {
    if (parseInt(num1.innerHTML) > parseInt(num2.innerHTML)) {
        score += 1;
    } else {
        updatescore()
    } 
    random_numbers();

});

lesser_than.addEventListener("click", () => {
    if (parseInt(num1.innerHTML) < parseInt(num2.innerHTML)) {
        score += 1;
    } else {
        updatescore()
    }
    random_numbers();
 
});

equal_to.addEventListener("click", () => {
    if (parseInt(num1.innerHTML) === parseInt(num2.innerHTML)) {
        score += 1;
    } else {
        updatescore()
    }
    random_numbers();
});

// Iteration 4: Build a timer for the game

function tim() {
    if (timer > 0) {
        timer--;
        time.textContent = timer;
    } else {
        window.location.href = "gameover.html";
    }
}