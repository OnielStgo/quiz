const form = document.querySelector('form');
const finalScoreContainer = document.querySelector('.final-score-container');

const correctAnswers = ['B', 'D', 'A', 'C'];

let score = 0;

const getOptionsChecked = () => correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value)

const calculateScore = optionsCheckedbyUser => {
  score = 0;

  optionsCheckedbyUser.forEach((optionCheckedbyUser, index) => {
    const isUserAnswerCorrect = optionCheckedbyUser === correctAnswers[index];
    if (isUserAnswerCorrect) {
      score += 25;
    }
  })
}

const animateResult = () => {
  let counter = 0;
  
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
      return;
    }

    finalScoreContainer.querySelector('span').textContent = `${++counter}%`; 
  }, 10);
}

const showScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  finalScoreContainer.classList.remove('d-none');
}

const handleFormSubmit = event => {
  event.preventDefault();

  const optionsCheckedbyUser = getOptionsChecked();

  calculateScore(optionsCheckedbyUser);
  showScore();
  animateResult();
}

form.addEventListener('submit', handleFormSubmit);