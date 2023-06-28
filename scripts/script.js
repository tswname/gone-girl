const questions = [
    {
        question: 'O filme onde tudo começou',
        answer: {text: 'todo mundo em pânico'}
    } 
]


const questionElement = document.querySelector('#question');
const answerInput = document.querySelector('#answer');

const checkButton = document.querySelector('#check');

checkButton.addEventListener("click", checkAnswer);

var currentQuestionIndex = 0;

function checkAnswer() {
    if(answerInput.value.toLowerCase() == questions[currentQuestionIndex].answer.text){
        checkButton.textContent = 'Certo';
        checkButton.setAttribute("class", "correto");
        checkButton.setAttribute('disabled', true);

        var nextButton = document.createElement("button");
        nextButton.textContent = "Clique aqui para avançar"
        nextButton.setAttribute("id", "next");

        document.querySelector('.quiz').appendChild(nextButton)

        nextButton.addEventListener("click", () => {
            location.href = './pages/identify.html';
        });
    } else {
        checkButton.textContent = 'Try again';
    }
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    return questionElement.textContent = currentQuestion.question;
}

function startQuestions() {
    //nextButton.textContent = '';
    showQuestion()
}

startQuestions()



