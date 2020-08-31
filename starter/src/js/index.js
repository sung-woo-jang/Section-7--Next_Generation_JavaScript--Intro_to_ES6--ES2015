import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '462b1cc8d4f2730081462fbc65136320';
    try {
        const res = await axios(
            `${proxy}https://forkify-api.herokuapp.com/api/search?key=${key}&q=${query}`
        );
        const recipe = res.data.recipes;
        console.log(recipe);
    } catch (error) {
        alert(error);
    }
}
getResults('soup');
