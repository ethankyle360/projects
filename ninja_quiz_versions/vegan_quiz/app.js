const answers = ['YES', 'YES', 'YES', 'YES']; // corrects answers
const form = document.querySelector('.quiz-form'); // Target quiz-form class
const result = document.querySelector('.result'); // Target result class

form.addEventListener('submit', e => {
    // Prevent webpage from refreshing
    e.preventDefault();

    let score = 0;
    // Store user answers
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
    // Go through each of answer
    userAnswers.forEach(function(value, index) {
        // compare user answers and correct answer
        if(value === answers[index]){
            score += 25;
        }
    });

    // Add result to result div
    //result.querySelector('span').textContent = `${score}% Vegan`;
    // Show result after hitting submit
    result.classList.remove('d-none');
    // Scroll up after hitting submit
    scrollTo(0,0);

    let output = 0;

    // Increase my score incrementally
    const timer = setInterval( () => {
        // Target span and change score
        result.querySelector('span').textContent = `You are ${output}% Vegan`;
        // Stop interval when output reaches user score
        if (output === score) {
            clearInterval(timer);
        } else { // Keep adding 1 to output until it reaches user score
            output++;
        }
    }, 10);
})
