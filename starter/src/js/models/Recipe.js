import axios from 'axios';
import { key, proxy } from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(
                `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
            );
        } catch (error) {
            console.log(error);
            alert('Something went wrong :(');
        }
    }
}
