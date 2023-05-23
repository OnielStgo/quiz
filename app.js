const form = document.querySelector('form');
const button = document.querySelector('.btn');
const p = document.createElement('p');

const correctAnswers = ['B', 'A', 'A', 'B'];

form.addEventListener('submit', event => {
  event.preventDefault();

  let score = 0;

  const optionsCheckedbyUser = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ];

  optionsCheckedbyUser.forEach((optionCheckedbyUser, index) => {
    if (optionCheckedbyUser === correctAnswers[index]) {
      score += 25;
    }
  })

  p.textContent = `Sua porcentagem de acertos é: ${score}%`;
  p.setAttribute('class', 'my-4');
  
  button.insertAdjacentElement('afterend', p);
})