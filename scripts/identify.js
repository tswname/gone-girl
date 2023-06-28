const answerInput = document.querySelector('#answer-2');

const checkButton = document.querySelector('#check-2');

checkButton.addEventListener("click", checkAnswer);

var currentQuestionIndex = 0;

function checkAnswer() {
    if(answerInput.value.toLowerCase() == 'you caught my heart feeling everything'){
        checkButton.textContent = 'Certo';
        checkButton.setAttribute("class", "correto");
        checkButton.setAttribute('disabled', true);

        var nextButton = document.createElement("button");
        nextButton.textContent = "Clique aqui para avançar"
        nextButton.setAttribute("id", "next");

        document.querySelector('.quiz').appendChild(nextButton)

        nextButton.addEventListener("click", () => {    
        location.href = '../pages/ds.html';
        });
    } else {
        checkButton.textContent = 'Try again';
    }
}




