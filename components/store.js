import {printToDom} from '../helpers/util.js'
import {addBook} from './cart.js'



const bookInfo = {
    photo: "",
    name: "Counter-Strike: Standing On Your Mate's Head",
    description: "The story behind the famous computer game Counter-Strike and how the idea to use your partner as a ladder to see your opponent was discovered.",
    author: "Alex 'Mangos' Kallman", 
    price: 28.99
};

const bookInfoStringBuilder = () => {
    for (let i = 0; i < bookInfo.length; i++) {
        let newString = '';
        newString += `<div class="card w-25">`;
        newString +=    `<img src=></img>`;
        newString +=  `<div class="cardInfo">`
        newString +=    `<h2>${bookInfo[i].name}</h2>`;
        newString +=    `<h4>${bookInfo[i].description}</h4>`;
        newString +=    `<p>${bookInfo[i].author}</p>`;
        newString +=    `<p>${bookInfo[i].price}</p>`;
        newString +=    `</div>`;
        newString += `</div>`;
    }
printToDom(bookInfoStringBuilder, 'bookInfoSpace');
    };




export {bookInfoStringBuilder}


