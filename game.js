const questions = [
  {
      question: "What is the capital of Japan?",
      options: ["Tokyo","Seoul","Beijing","Bangkok"],
      correctAnswer: "A"
  },
  {
      question: "Which gas is essential for photosynthesis in plants?",
      options: ["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen"],
      correctAnswer: "B"
  },
  {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson","Benjamin Franklin","George Washington","John Adams"],
      correctAnswer: "C"
  },
  {
      question: "What is the result of 7 multiplied by 8?",
      options: ["15","56","64","48"],
      correctAnswer: "C"
 
  },
  {
      question: "Which film won the Academy Award for Best Picture in 2020?",
      options: ["The Shape of Water","Parasite","1917","Joker"],
      correctAnswer: "B"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

  // Clear previous options
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<label><input type="radio" name="answer" value="${String.fromCharCode(65 + index)}">${String.fromCharCode(65 + index)}. ${option}</label>`;
      optionsElement.appendChild(li);
  });
  
  submitButton.style.display = "block";
  nextButton.style.display = "none";
  feedbackElement.textContent = "";
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
      feedbackElement.textContent = "Please select an answer.";
      return;
  }
  
  if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
      feedbackElement.textContent = "Correct!";
      score++;
      scoreElement.innerHTML = `Score : ${score}`
  } else {
      feedbackElement.textContent = "Incorrect. The correct answer is " + questions[currentQuestionIndex].correctAnswer;
  }
  
  submitButton.style.display = "none";
  nextButton.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      loadQuestion();
  } else {
      endQuiz();
  }
}

function endQuiz() {
  questionElement.textContent = "Quiz Completed!";
  optionsElement.innerHTML = "";
  feedbackElement.textContent = `Your Score: ${score} out of ${questions.length}`;
  scoreElement.style.display = "none";
  submitButton.style.display = "none";
  nextButton.style.display = "none";
}

loadQuestion();

submitButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextQuestion);
const timerElement = document.getElementById("countdown");
let countdown = 60; // Set the initial countdown time in seconds

// Function to update the timer display
function updateTimerDisplay() {
  timerElement.textContent = `Time Remaining: ${countdown} seconds`;
}

// Function to handle each second of the countdown
function countdownTick() {
  if (countdown > 0) {
    countdown--;
    updateTimerDisplay();
    setTimeout(countdownTick, 1000); // Call countdownTick again after 1 second
  } else {
    // Time's up, handle it here (e.g., end the quiz)
    endQuiz();
  }
}

// Start the countdown when the quiz loads
countdownTick();

// Modify the endQuiz() function to clear the timer if the quiz ends prematurely
function endQuiz() {
  clearTimeout(); // Clear any pending timeouts
  // Rest of your endQuiz() code...
}


function endQuiz() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    feedbackElement.textContent = `Your Score: ${score} out of ${questions.length}`;
    scoreElement.style.display = "none";
    submitButton.style.display = "none";
    nextButton.style.display = "none";
  
    // Create and append a "Play Again" anchor element
    const playAgainLink = document.createElement("a");
    playAgainLink.href = "game.html"; // Replace with the URL of your play again page
    playAgainLink.textContent = "Play Again";
  
    // Create a line break element for spacing
    const lineBreak = document.createElement("br");
  
    // Append the "Play Again" link and line break to the quiz container
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.appendChild(lineBreak);
    quizContainer.appendChild(playAgainLink);
  }
  
  