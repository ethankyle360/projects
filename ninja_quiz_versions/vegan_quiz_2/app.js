const correctAnswers = ['YES','YES','YES','YES'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    // Make sure it doesn't refresh
    e.preventDefault();
    
    // Initialize user score and store all my answers
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    //console.log(userAnswers);

    // Go through each of my answers and
    // compare into the correct answers
    userAnswers.forEach( (answer, index) => {
        if (answer === correctAnswers[index]){
            score += 25; // Add 25 points every time I'm correct
        }
    })
    //console.log(score);

    // Upon submitting scroll to top to see score
    scrollTo(0, 0);
    // Display the score by removing display none
    //result.classList.remove('d-none');

    let output = 0;
    // Increase output by 1 every 10 ms
    const timer = setInterval( () => {
        // Target h2 tag in result div
        result.querySelector('h2').textContent = `${output}% Vegan`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10)
})