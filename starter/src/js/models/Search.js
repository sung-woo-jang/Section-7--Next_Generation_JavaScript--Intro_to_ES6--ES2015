import axios from 'axios';

export default class Search {
    constructor(qurey) {
        this.qurey = qurey;
    }
    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '462b1cc8d4f2730081462fbc65136320';
        try {
            const res = await axios(
                `${proxy}https://forkify-api.herokuapp.com/api/search?key=${key}&q=${this.qurey}`
            );

            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
