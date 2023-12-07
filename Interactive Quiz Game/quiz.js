const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
        question: 'Which is the longest river in the world?',
        options: ['Great Ganga', 'Nile', 'Amazon', 'Niger'],
        correctAnswer: 'Nile',
    },
    {
        question: 'Which is the largest ocean in the world?',
        options: ['Indian Ocean', 'Pacific Ocean', 'Artic Ocean', 'Atlantic Ocean'],
        correctAnswer: 'Pacific Ocean',
    },

  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeRemaining = 20;
  let timer;
  
  function startQuiz() {
    showQuestion();
    timer = setInterval(updateTimer, 1000);
  }
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
  
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
      document.getElementById('feedback').textContent = 'Correct!';
    } else {
      document.getElementById('feedback').textContent = 'Incorrect!';
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function updateTimer() {
    if (timeRemaining > 0) {
      timeRemaining--;
      document.getElementById('time').textContent = timeRemaining;
    } else {
      checkAnswer(); // Auto submit if time runs out
    }
  }
  
  function endQuiz() {
    clearInterval(timer);
    document.getElementById('question').textContent = 'Quiz completed!';
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('score').textContent = 'Final Score: ' + score;
  }
  
  function nextQuestion() {
    timeRemaining = 10;
    document.getElementById('time').textContent = timeRemaining;
    document.getElementById('feedback').textContent = '';
    showQuestion();
  }
  
  window.onload = startQuiz;
  