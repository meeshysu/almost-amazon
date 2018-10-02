import {getBookPrice} from './store.js'

const bookDisplay = () => {
    let domString = `<p>${getBookPrice()}</p>`;
    return domString;
}



export {bookDisplay}
