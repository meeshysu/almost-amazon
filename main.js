import {bookInfoStringBuilder} from './components/store.js'
import {addBook} from './components/cart.js'

const initializeApp = () => {
    addBook();
    bookInfoStringBuilder();
}
initializeApp();




