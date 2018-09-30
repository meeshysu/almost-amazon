import {printToDom} from '../helpers/util.js'
import {attachEvents} from './cart.js'


const bookInfo = {
    photo: "",
    name: "Counter-Strike: Standing On Your Mate's Head",
    description: "The story behind the famous computer game Counter-Strike and how the idea to use your partner as a ladder to see your opponent was discovered.",
    author: "Alex 'Mangos' Kallman", 
};


const bookInfoStringBuilder = () => {
        let newString = '';
    for (let i = 0; i < bookInfo.length; i++) {
        newString += `<div class="card w-25">`;
        newString +=    `<h2>${bookInfo[i].name}</h2>`;
        newString +=    `<h4>${bookInfo[i].description}</h4>`;
        newString +=    `<p>${bookInfo[i].author}</p>`
        newString += `</div>`;
    }
    printToDom(newString, 'bookInfoSpace');
    }


export {bookInfoStringBuilder}


