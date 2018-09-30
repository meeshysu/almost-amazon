import {bookInfoStringBuilder} from './store.js'

const addToCart = document.getElementById('cart');

const bookPrice = [{
    price: '20.99'
}]

const addBook = () => {
    addToCart.addEventListener('click', () => {
        bookInfoStringBuilder();
    })
};

const attachEvents = () => {
    addBook();
    bookInfoStringBuilder();
}

export {attachEvents, addBook}