// Global app controller
import str from './models/Search';
// import { add as a, multiply as m, ID } from './views/searchView';
import * as serchView from './views/searchView';

console.log(
    `Using imported function! ${serchView.add(
        serchView.ID,
        2
    )} and ${serchView.multiply(3, 5)}, ${str}`
);
