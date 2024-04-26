
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

