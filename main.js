import {bookInfoStringBuilder, addBook} from './components/store.js'


const initializeApp = () => {
    addBook();
    bookInfoStringBuilder();
}
initializeApp();




