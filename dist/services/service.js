var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function dadJokesService() {
    return {
        getDadJoke: () => __awaiter(this, void 0, void 0, function* () {
            const API_URL = 'https://icanhazdadjoke.com/';
            const response = yield fetch(API_URL, {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = yield response.json();
            return data.joke;
        }),
    };
}
export function chuckJokesService() {
    return {
        getChuckJoke: () => __awaiter(this, void 0, void 0, function* () {
            const API_URL = 'https://api.chucknorris.io/jokes/random';
            const response = yield fetch(API_URL, {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = yield response.json();
            return data.value;
        }),
    };
}
export function weatherService() {
    return {
        getWeather: (provCode, cp) => __awaiter(this, void 0, void 0, function* () {
            const API_URL = `https://www.el-tiempo.net/api/json/v2/provincias/${provCode}/municipios/${cp}`;
            const response = yield fetch(API_URL, {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = yield response.json();
            return data;
        })
    };
}
