import {printToDom} from '../helpers/util.js'



const addToCart = document.getElementById('cart');

const bookInfo = {
    photo: "",
    name: "Counter-Strike: Standing On Your Mate's Head",
    price: "20.99"
};


const bookInfoStringBuilder = () => {
        let newString = '';
        newString += `<div class="card w-25">`;
        newString +=    `<h2>${bookInfo.photo}</h2>`;
        newString +=    `<h4>${bookInfo.name}</h4>`;
        newString +=    `<p>${bookInfo.price}</p>`
        newString += `</div>`;
        printToDom(newString, 'bookInfoSpace');
    };
  



const addBook = () => {
    addToCart.addEventListener('click', () => {
        bookInfoStringBuilder();
    })
};

export {bookInfo, addBook, bookInfoStringBuilder}