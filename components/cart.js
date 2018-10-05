import {bookInfo, getBookPrice} from './store.js'

const bookDisplay = () => {
    let domString = `<img src="${bookInfo.photo}" width="50px" height="50px">`;
    domString += `<p>${getBookPrice()}</p>`;
    return domString;
}


export {bookDisplay};
