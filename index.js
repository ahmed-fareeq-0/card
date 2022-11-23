let question = document.getElementById('question');
let details = document.getElementById('details');

question.addEventListener('mouseover', () => {
    details.style.top = '0';
    details.style.left = '0';
    details.style.borderBottomLeftRadius = '0%';
    question.style.display = 'none';
})