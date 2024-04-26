import { dadJokesService } from '../services/service.js';

const reportJokes: { joke: string, score: number, date: string }[] = [];

const service = dadJokesService();

document.addEventListener('DOMContentLoaded', randomDadJoke);

async function randomDadJoke() {
    const joke = await service.getDadJoke();
    document.getElementById('joke-text')!.innerText = joke;
    reportJokes.push({ joke, score: 0, date: new Date().toISOString() });
    console.log(reportJokes);
}

document.getElementById('joke-button')!.addEventListener('click', async () => {
    randomDadJoke();
});

function rateJoke(score: number) {
    const currentJoke = document.getElementById('joke-text')!.innerText;
    const index = reportJokes.findIndex(joke => joke.joke === currentJoke);
    if (index !== -1) {
        reportJokes[index].score = score;
        console.log(reportJokes);

        resetButtonColors();
        const scoreButton = document.getElementById(`score${score}`)!;
        scoreButton.style.backgroundColor = 'green';
    }
}

function resetButtonColors() {

    const scoreButtons = [1, 2, 3].map(score => document.getElementById(`score${score}`)!);

    scoreButtons.forEach(scoreButton => {
        scoreButton.style.backgroundColor = '';
    });
}

setTimeout(() => {
    document.getElementById('score1')!.addEventListener('click', () => rateJoke(1));
    document.getElementById('score2')!.addEventListener('click', () => rateJoke(2));
    document.getElementById('score3')!.addEventListener('click', () => rateJoke(3));
}, 100);


