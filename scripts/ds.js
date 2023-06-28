const riddle =
    {
        question: 'O que você perdeu esse dia?',
        answer: {text: 'colar'}
    } 


const questionElement = document.querySelector('#question-3');
const answerInput = document.querySelector('#answer-3');

const checkButton = document.querySelector('#check');

checkButton.addEventListener("click", checkAnswer);

function checkAnswer() {
    if(answerInput.value.toLowerCase() == riddle.answer.text){
        checkButton.textContent = 'Certo';
        checkButton.setAttribute("class", "correto");
        checkButton.setAttribute('disabled', true);

        var nextButton = document.createElement("button");
        nextButton.textContent = "Clique aqui para avançar"
        nextButton.setAttribute("id", "next");

        document.querySelector('.quiz').appendChild(nextButton)

        nextButton.addEventListener("click", () => {
            location.href = '../pages/email.html';
        });
    } else {
        checkButton.textContent = 'Try again';
    }
}

function showQuestion() {
    return questionElement.textContent = riddle.question;
}

function startQuestions() {
    //nextButton.textContent = '';
    showQuestion()
}

startQuestions()



