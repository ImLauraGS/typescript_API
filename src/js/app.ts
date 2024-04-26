async function getDadJoke() {
    const API_URL = 'https://icanhazdadjoke.com/';

    const response = await fetch(API_URL, {
        headers: {
            Accept: 'application/json',
        },
    });
    const data = await response.json();
    return data.joke;
}

document.getElementById('joke-button')!.addEventListener('click', async () => {

    const joke = await getDadJoke();

    document.getElementById('joke-text')!.innerText = joke;
});

window.onload = async () => {
    const initialJoke = await getDadJoke();
    document.getElementById('joke-text')!.innerText = initialJoke;
};