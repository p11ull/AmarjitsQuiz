// Set of questions --> array of objects
// Each question needs the following:
  // Question text
  // Set of answers
  // Which answer is correct
// Array of questions and their choices
const questions = [
  {
    question: 'Which former intern did Bill Clinton have an affair with?',
    choices: ['Monica Lewinski', 'Hillary Clinton', 'Stormy Daniels'],
    answer: 'Monica Lewinski'
  },
  {
    question: 'Which Broadway musical tells the story of one of the Presidents and founding fathers?',
    choices: ['Assassins', 'Miss Saigon', 'Hamilton'],
    answer: 'Hamilton'
  },
  {
    question: 'Which one of the following presidents was not a founding father?',
    choices: ['John Adams', 'Andrew Jackson', 'Thomas Jefferson'],
    answer: 'Andrew Jackson'
  },
  {
    question: 'Which president is on the $50 bill?',
    choices: ['Ulysses S. Grant', 'Benjamin Franklin', 'Abraham Lincoln'],
    answer: 'Ulysses S. Grant'
  },
  {
    question: 'When did the White House first website go live?',
    choices: ['1984', '1994', '2004'],
    answer: '1994'
  },
    // Add more questions in a similar format
  // { question: '...', choices: ['...', '...', '...'], answer: '...' }
];

// Landing page:
  // Explanation of the quiz
  // Start button

// Click the start button:
  // Landing page goes away
  // Timer starts
  // The first question appears (with its answers)
let currentQuestionIndex = 0;
let timeLeft = 60; // Initial time for the quiz
let timerInterval;

// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears
function startQuiz() {
  startButton.style.display = 'none';
  questionsDiv.classList.remove('hide');

  // Start the timer
  startTimer();

  showQuestion();
}

function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;
    timerSpan.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  document.getElementById('question-title').textContent = currentQuestion.question;
  choicesDiv.innerHTML = '';

  currentQuestion.choices.forEach(choice => {
    const choiceButton = document.createElement('button');
    choiceButton.textContent = choice;
    choiceButton.addEventListener('click', handleAnswerClick);
    choicesDiv.appendChild(choiceButton);
  });
}

function handleAnswerClick(event) {
  const selectedAnswer = event.target.textContent;
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.answer) {
    feedbackDiv.textContent = 'Correct!';
  } else {
    feedbackDiv.textContent = 'Incorrect!';
    timeLeft -= 10; // Penalty for incorrect answer
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

// After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score
function endQuiz() {
  clearInterval(timerInterval);

  questionsDiv.classList.add('hide');
  endScreenDiv.classList.remove('hide');

  finalScoreSpan.textContent = timeLeft;
}

// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again
submitButton.addEventListener('click', function() {
  const initials = initialsInput.value.trim();

  if (initials !== '') {
    // Save highscore logic here (store initials and score)
    // Example: localStorage.setItem('highscore', JSON.stringify({ initials, score: timeLeft }));

    // Redirect to highscores.html or show highscores
    window.location.href = 'highscores.html';
  }
});

startButton.addEventListener('click', startQuiz);
