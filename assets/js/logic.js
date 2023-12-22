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

// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears

// After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score

// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again
