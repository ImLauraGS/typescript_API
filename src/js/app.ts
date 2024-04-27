import { dadJokesService, weatherService, chuckJokesService } from '../services/service.js';

document.addEventListener('DOMContentLoaded', randomDadJoke);
document.addEventListener('DOMContentLoaded', getWeather);

const reportJokes: { joke: string, score: number, date: string }[] = [];
const service = dadJokesService();

async function randomDadJoke() {
    const joke = await service.getDadJoke();
    document.getElementById('joke-text')!.innerText = joke;
    reportJokes.push({ joke, score: 0, date: new Date().toISOString() });
    console.log(reportJokes);
}

document.getElementById('joke-button')!.addEventListener('click', async () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
        randomDadJoke();
    } else {
        randomChuckJoke();
    }
});

function rateJoke(score: number) {
    const currentJoke = document.getElementById('joke-text')!.innerText;
    const index = reportJokes.findIndex(joke => joke.joke === currentJoke);
    if (index !== -1) {
        reportJokes[index].score = score;
        console.log(reportJokes);
        resetButtonColors();
        const scoreButton = document.getElementById(`score${score}`)!;
        scoreButton.style.scale = '1.5';
    }
}

function resetButtonColors() {
    const scoreButtons = [1, 2, 3].map(score => document.getElementById(`score${score}`)!);
    scoreButtons.forEach(scoreButton => {
        scoreButton.style.scale = '';
    });
}

document.getElementById('score1')!.addEventListener('click', () => rateJoke(1));
document.getElementById('score2')!.addEventListener('click', () => rateJoke(2));
document.getElementById('score3')!.addEventListener('click', () => rateJoke(3));

const chuckService = chuckJokesService();

async function randomChuckJoke() {
    const joke = await chuckService.getChuckJoke();
    document.getElementById('joke-text')!.innerText = joke;
    reportJokes.push({ joke, score: 0, date: new Date().toISOString() });
}

const weather = weatherService();

async function getWeather() {
    const provCode = '08'; // Barcelona
    const cp = '08100'; // Mollet del Vallès, this can be changed to any other city code
    const data = await weather.getWeather(provCode, cp);
    document.getElementById('weather')!.innerText = `${data.temperatura_actual} ºC`;
    document.getElementById('weather_description')!.innerText = `${data.stateSky.description}`;
}


 