function playGame() {

    const secretNumber = Math.floor(Math.random() * 10) + 1;
    const maxAttempts = 3;
    let win = false;

    for (let attempt = 1; attempt <= maxAttempts; attempt = attempt + 1) {
        let raw = prompt(`Attempt ${attempt} of ${maxAttempts} — GUESS MO NA DALIIII:`);

        if (raw === null) {
            alert(`Game is cancelled :(`);
            return;
        }

        raw = raw.trim();
        if (raw === '') {
            alert ("You did not enter anything. This attempt wont be counted.");
            attempt--;
            continue;
        }

        const guess = Number(raw);
        if (!Number.isInteger(guess) || guess < 1 || guess > 10) {
            alert('Please enter a whole number between 1 and 10. This attempt wont be counted.');
            attempt--;
            continue;
        }

        if (guess === secretNumber) {
            alert(`Correct!! Yehey, you are right! the number was ${secretNumber}.\n you guessed it in ${attempt} ${attempt === 1 ? 'Try' : 'Tries'}.`);
            win = true;
            break;
        } else if (guess < secretNumber) {
            alert ('too low!');
        } else {
            alert ('too high!');
        }
    }

    if (!win) {
        alert (`AWWWW wala ka nang attempts. you used up all ${maxAttempts} attempts. Ang tamang kasagutan ayyyy ${secretNumber}.`)
    }
} 

document.getElementById('playButton').addEventListener('click', playGame);
