
export function dadJokesService() {
  return {
    getDadJoke: async () => {
        const API_URL = 'https://icanhazdadjoke.com/';
        const response = await fetch(API_URL, {
            headers: {
                Accept: 'application/json',
            },
        });
        const data = await response.json();
        return data.joke;
    },
  };
}

export function chuckJokesService() {
  return {
    getChuckJoke: async () => {
        const API_URL = 'https://api.chucknorris.io/jokes/random';
        const response = await fetch(API_URL, {
            headers: {
                Accept: 'application/json',
            },
        });
        const data = await response.json();
        return data.value;
    },
  };
}

export function weatherService() {
  return {
    getWeather: async (provCode: string, cp: string) => {
        const API_URL = `https://www.el-tiempo.net/api/json/v2/provincias/${provCode}/municipios/${cp}`;
        const response = await fetch(API_URL, {
          headers: {
              Accept: 'application/json',
          },
      });
      const data = await response.json();
        return data;
    }
  }
} 