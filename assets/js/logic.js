const startButton = document.getElementById('start');
const questionsDiv = document.getElementById('questions');
const choicesDiv = document.getElementById('choices');
const feedbackDiv = document.getElementById('feedback');
const endScreenDiv = document.getElementById('end-screen');
const finalScoreSpan = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const submitButton = document.getElementById('submit');
const timerSpan = document.getElementById('time');

let currentQuestionIndex = 0;
let timeLeft = 60; // Initial time for the quiz
let timerInterval;

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

function endQuiz() {
  clearInterval(timerInterval);

  questionsDiv.classList.add('hide');
  endScreenDiv.classList.remove('hide');

  finalScoreSpan.textContent = timeLeft;
}

submitButton.addEventListener('click', function() {
  const initials = initialsInput.value.trim();

  if (initials !== '') {
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    const newScore = { initials, score: timeLeft };
    highscores.push(newScore);
    localStorage.setItem('highscores', JSON.stringify(highscores));

    // Redirect to highscores.html or show highscores
    window.location.href = 'highscores.html';
  }
});

startButton.addEventListener('click', startQuiz);
