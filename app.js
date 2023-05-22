const form = document.querySelector('form');
const feedbacks = document.querySelectorAll('.feedback');
const button = document.querySelector('button');

const paragraphs = ['feedbackParagraph1','feedbackParagraph2','feedbackParagraph3','feedbackParagraph4'];
const correctCapitals = ['B', 'A', 'A', 'B'];

let userScore = 0;


const getInputValues = () => {
  const answersUser = [
      form.inputQuestion1.value,
      form.inputQuestion2.value,
      form.inputQuestion3.value,
      form.inputQuestion4.value
    ];
    return answersUser;
}

const isAnAnswerNotChecked = answerUser => answerUser === '';

const clearPoints = () => {
  const h1 = document.querySelector('h1');
  if (h1) {
    h1.remove();    
  }
}

const calculateScore = (answerUser, index) => {
  if (answerUser === correctCapitals[index]) {
    userScore += 25;
  }
}

const showScore = () => {
  const points = document.createElement('h1');

  if ( userScore >= 75) {
    points.setAttribute('class', 'text-success');
  } else if ( userScore >= 50){
    points.setAttribute('class', 'text-warning');
  } else {
    points.setAttribute('class', 'text-secondary');
  }

  points.textContent = `Sua porcentagem de acertos é: ${userScore}%`;
  button.insertAdjacentElement('afterend', points);
}

const clearMsgErrorAndScore = () => {
  userScore = 0;
  const msgsError = document.querySelectorAll('.text-danger');

  msgsError.forEach(msgError => {
    msgError.remove();
  })
}

const setErrorMsg = (answerUser, index) => {
  if (answerUser === '') {
    paragraphs[index] = document.createElement('p');
    paragraphs[index].textContent = 'Escolha uma opção';
    paragraphs[index].setAttribute('class', 'text-danger');
    feedbacks[index].insertAdjacentElement('afterend', paragraphs[index]);
  }
}


const handleSubmitEvent = (event) => {
  event.preventDefault();
  const answersUsers = getInputValues(); 
  const optionNotChecked = answersUsers.some(isAnAnswerNotChecked);

  if (!optionNotChecked) {
    clearPoints();
    answersUsers.forEach(calculateScore);
    showScore();
  }
  clearMsgErrorAndScore();
  answersUsers.forEach(setErrorMsg);
}

const handleClickOnInputs = event => {
  event.stopPropagation();
  
  if (event.target.tagName === 'INPUT') {
    const answersUsers = getInputValues(); 
    clearMsgErrorAndScore();
    answersUsers.forEach(setErrorMsg);
  }
}


form.addEventListener('submit', handleSubmitEvent);
form.addEventListener('click', handleClickOnInputs);



///////////////////////////////////////////////////////////////////////////////////////////
/////////////// Segue outra alternativa que usa só um listener de eventos /////////////////
///////////////////////////////////////////////////////////////////////////////////////////


// const form = document.querySelector('form');
// const button = document.querySelector('button');
// const feedbacks = document.querySelectorAll('.feedback');

// const paragraphs = ['feedbackParagraph1','feedbackParagraph2','feedbackParagraph3','feedbackParagraph4'];
// const correctCapitals = ['B', 'A', 'A', 'B'];

// let userScore = 0;


// const getInputValues = () => {
//   const answersUser = [
//       form.inputQuestion1.value,
//       form.inputQuestion2.value,
//       form.inputQuestion3.value,
//       form.inputQuestion4.value
//     ];
//     return answersUser;
// }

// const isAnAnswerNotChecked = answerUser => answerUser === '';

// const clearPoints = () => {
//   const h1 = document.querySelector('h1');
//   if (h1) {
//     h1.remove();    
//   }
// }

// const calculateScore = (answerUser, index) => {
//   if (answerUser === correctCapitals[index]) {
//     userScore += 25;
//   }
// }

// const showScore = () => {
//   const points = document.createElement('h1');

//   if ( userScore >= 75) {
//     points.setAttribute('class', 'text-success');
//   } else if ( userScore >= 50){
//     points.setAttribute('class', 'text-warning');
//   } else {
//     points.setAttribute('class', 'text-secondary');
//   }

//   points.textContent = `Sua porcentagem de acertos é: ${userScore}%`;

//   button.insertAdjacentElement('afterend', points);
// }

// const clearMsgErrorAndScore = () => {
//   userScore = 0;
//   const msgsError = document.querySelectorAll('.text-danger');

//   msgsError.forEach(msgError => {
//     msgError.remove();
//   })
// }

// const setErrorMsg = (answerUser, index) => {
//   if (answerUser === '') {
//     paragraphs[index] = document.createElement('p');
//     paragraphs[index].textContent = 'Escolha uma opção';
//     paragraphs[index].setAttribute('class', 'text-danger');
//     feedbacks[index].insertAdjacentElement('afterend', paragraphs[index]);
//   }
// }



// const handleClickEvent = (event) => {
//   event.stopPropagation();

//   if (event.target.tagName === 'INPUT') {
//     const answersUsers = getInputValues(); 
//     clearMsgErrorAndScore();
//     answersUsers.forEach(setErrorMsg);

//   } else if (event.target.tagName === 'BUTTON'){
//     event.preventDefault();
//     const answersUsers = getInputValues(); 
//     const optionNotChecked = answersUsers.some(isAnAnswerNotChecked);

//     if (!optionNotChecked) {
//      clearPoints();
//      answersUsers.forEach(calculateScore);
//      showScore();
//     }
//     clearMsgErrorAndScore();
//     answersUsers.forEach(setErrorMsg);
//   }
// }

// form.addEventListener('click', handleClickEvent);