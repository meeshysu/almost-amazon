import {printToDom} from '../helpers/util.js'
import {getBook} from './store.js'

const getStuff = {
    getBook()
};
printToDom(getStuff, 'cart');


export {getStuff}