const answerInput = document.querySelector('#answer-4');

const checkButton = document.querySelector('#check');

checkButton.addEventListener("click", checkAnswer);

function checkAnswer() {
    if(answerInput.value.toLowerCase() == 'dourado'){
        checkButton.textContent = 'Certo';
        checkButton.setAttribute("class", "correto");
        checkButton.setAttribute('disabled', true);

        var nextButton = document.createElement("button");
        nextButton.textContent = "Clique aqui para avançar"
        nextButton.setAttribute("id", "next");

        document.querySelector('.quiz').appendChild(nextButton)

        nextButton.addEventListener("click", () => {
            location.href = '../pages/movies.html';
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

