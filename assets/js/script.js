// start button that begins a timer and presents first question
    // timer runs in header, is affected by incorrect answers but persists between questions

// answering a question leads to another question
    // array of answers for each question

// incorrect answers deduct time from the timer

// when all questions are answered or the timer reaches 0 the game ends
    // prompt alert for initial entry and save score to this entry in local storage

// when the game is over, initials can be entered and saved to the high scores page
    // use local storage to save scores between sessions
    // submitting initials links to high score page


var timer = function() {
    setInterval(myTimer, 1000);

var time = 60;


function myTimer() {
  
  time--;
  document.getElementById("timer").innerHTML = time;
  if (time === 0 || time === -1, -2, -3, -4, -5) {
    clearTimeout(timer);
  }
}
};

timer();
