const form = document.querySelector('form');
const finalresult = document.querySelector('.result');

const correctAnswers = ['B', 'D', 'A', 'C'];
let score = 0;

const getOptionsChecked = () => {
  return optionsCheckedbyUser = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ];
}

const calculateScore = (optionCheckedbyUser, index) => {
  if (optionCheckedbyUser === correctAnswers[index]) {
    score += 25;
  }
}

const animateResult = () => {
  let timer = null;
  let numToShow = 0;
  
  timer = setInterval(() => {
    if (numToShow === score) {
      clearInterval(timer);
      return;
    }
    finalresult.querySelector('span').textContent = `${++numToShow}%`; 
  }, 10);
}

const showScore = () => {
  scrollTo(0,0);
  finalresult.classList.remove('d-none');
}

const handleFormSubmit = event => {
  event.preventDefault();
  score = 0;
  const optionsCheckedbyUser = getOptionsChecked();
  optionsCheckedbyUser.forEach(calculateScore);
  showScore();
  animateResult();
}

form.addEventListener('submit', handleFormSubmit);