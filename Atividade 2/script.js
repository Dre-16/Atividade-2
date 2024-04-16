function startQuiz(quizType) {
    let questions;
    switch (quizType) {
        case 'database':
            questions = databaseQuestions;
            break;
        case 'oop':
            questions = oopQuestions;
            break;
        case 'web':
            questions = webQuestions;
            break;
        default:
            console.error('Invalid quiz type');
            return;
    }

    localStorage.setItem('quizQuestions', JSON.stringify(questions));
    window.location.href = 'quiz.html';
}

let selectedButton;

function selectAnswer(index) {
    if (selectedButton) {
        selectedButton.classList.remove('selected');
    }
    selectedButton = document.getElementById('option-' + index);
    selectedButton.classList.add('selected');
}
