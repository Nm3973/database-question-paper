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

    // Function to generate PDF
    window.generatePDF = () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        let content = document.querySelector('.container').innerHTML;
        doc.html(content, {
            callback: function (doc) {
                doc.save('question-paper.pdf');
            },
            x: 10,
            y: 10
        });
    };
});
