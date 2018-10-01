import {printToDom} from '../helpers/util.js'
import {getStuff} from './cart.js'




const addToCart = document.getElementById('cart');

const bookInfo = {
    photo: "Boosting.png",
    name: "Counter-Strike: The Art of Boosting",
    author: "by Alex 'Mangos' Kallman",
    price: "20.99"
};


const bookInfoStringBuilder = () => {
        let newString = '';
        newString += `<div class="card w-25 p-4 m-4">`;
        newString +=    `<img src="${bookInfo.photo}"></img>`;
        newString +=    `<h4>${bookInfo.name}</h4>`;
        newString +=    `<p>${bookInfo.author}</p>`;
        newString +=    `<p>${bookInfo.price}</p>`
        newString += `</div>`;
        printToDom(newString, 'bookInfoSpace');
    };



const getBook = () => {
    return bookInfo;
};


const addBook = () => {
    addToCart.addEventListener('click', () => {
        getStuff();
        console.log('click');
    })
};

export {getBook, addBook, bookInfoStringBuilder}