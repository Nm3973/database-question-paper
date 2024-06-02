document.addEventListener('DOMContentLoaded', () => {
    // Function to search questions
    window.searchQuestions = () => {
        let input = document.getElementById('searchBar').value.toLowerCase();
        let questions = document.querySelectorAll('.question-paper li');
        
        questions.forEach(question => {
            if (question.innerText.toLowerCase().includes(input)) {
                question.style.display = '';
            } else {
                question.style.display = 'none';
            }
        });
    };
});
