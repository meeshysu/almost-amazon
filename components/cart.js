import {bookInfoStringBuilder} from './store.js'

const addToCart = document.getElementById('cart');

const addBook = () => {
    addToCart.addEventListener('click', () => {
        bookInfoStringBuilder();
    })
};

const attachEvents = () => {
    addBook();
}

export {attachEvents, addBook}