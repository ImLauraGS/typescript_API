var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { dadJokesService } from '../services/service.js';
const reportJokes = [];
const service = dadJokesService();
document.addEventListener('DOMContentLoaded', randomDadJoke);
function randomDadJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const joke = yield service.getDadJoke();
        document.getElementById('joke-text').innerText = joke;
        reportJokes.push({ joke, score: 0, date: new Date().toISOString() });
        console.log(reportJokes);
    });
}
document.getElementById('joke-button').addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    randomDadJoke();
}));
function rateJoke(score) {
    const currentJoke = document.getElementById('joke-text').innerText;
    const index = reportJokes.findIndex(joke => joke.joke === currentJoke);
    if (index !== -1) {
        reportJokes[index].score = score;
        console.log(reportJokes);
        resetButtonColors();
        const scoreButton = document.getElementById(`score${score}`);
        scoreButton.style.backgroundColor = 'green';
    }
}
function resetButtonColors() {
    const scoreButtons = [1, 2, 3].map(score => document.getElementById(`score${score}`));
    scoreButtons.forEach(scoreButton => {
        scoreButton.style.backgroundColor = '';
    });
}
setTimeout(() => {
    document.getElementById('score1').addEventListener('click', () => rateJoke(1));
    document.getElementById('score2').addEventListener('click', () => rateJoke(2));
    document.getElementById('score3').addEventListener('click', () => rateJoke(3));
}, 100);
