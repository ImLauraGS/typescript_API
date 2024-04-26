"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getDadJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const API_URL = 'https://icanhazdadjoke.com/';
        const response = yield fetch(API_URL, {
            headers: {
                Accept: 'application/json',
            },
        });
        const data = yield response.json();
        return data.joke;
    });
}
document.getElementById('joke-button').addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const joke = yield getDadJoke();
    document.getElementById('joke-text').innerText = joke;
}));
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    const initialJoke = yield getDadJoke();
    document.getElementById('joke-text').innerText = initialJoke;
});
