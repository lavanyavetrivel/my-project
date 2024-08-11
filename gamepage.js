// gamepage.js

// Function to handle option clicks
function handleOptionClick(event) {
    const isCorrect = event.target.getAttribute('data-correct') === 'true';
    const feedback = document.getElementById('feedback');
    
    if (isCorrect) {
        feedback.textContent = 'Correct! Moving to the next level...';
        feedback.style.display = 'block';

        // Move to the next level after a short delay
        setTimeout(() => {
            moveToNextLevel();
        }, 1000);
    } else {
        feedback.textContent = 'Incorrect, try again.';
        feedback.style.color = '#dc3545';
        feedback.style.display = 'block';
    }
}

// Function to move to the next level
function moveToNextLevel() {
    const currentLevel = document.querySelector('.game-level:not([style*="display: none"])');
    const nextLevel = currentLevel.nextElementSibling;

    if (nextLevel && nextLevel.classList.contains('game-level')) {
        currentLevel.style.display = 'none';
        nextLevel.style.display = 'block';
        document.getElementById('feedback').style.display = 'none';
    } else {
        document.getElementById('feedback').textContent = 'You have completed all levels!';
    }
}

// Add event listeners to options
const options = document.querySelectorAll('button.option');
options.forEach(option => option.addEventListener('click', handleOptionClick));


function gohome(){
    window.location.href="open.html";
}