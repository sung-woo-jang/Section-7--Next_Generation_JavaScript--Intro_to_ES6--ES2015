import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(qurey) {
        this.qurey = qurey;
    }
    async getResults() {
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
