/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-cycle */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import { DateTime } from '../modules/luxon.js';
import appendBook from '../modules/appendBook.js';
import displaySection from '../modules/displaySection.js';
import NewBook from '../modules/bookClass.js';

// selectors
const btn = document.querySelector('#btn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
export const book = document.querySelector('#content');
const myDate = document.querySelector('.date');
export const data = JSON.parse(localStorage.getItem('bookData')) || [];
export const li = document.querySelectorAll('.nav-links a');
export const newForm = document.getElementById('newform');
export const contact = document.getElementById('contact');
const section = document.createElement('section');
export const form = document.querySelector('.form');
section.className = 'books_container';
const h1 = document.createElement('h1');
h1.innerText = 'All awesome books';
h1.className = 'books_header';

// changing the dom element on nav clicks
li.forEach((item) => {
  displaySection(item, li);
});

myDate.innerText = DateTime.now().toLocaleString(
  DateTime.DATETIME_MED_WITH_SECONDS
);

// instantiate a new book using the NewBook class
const myMethod = new NewBook(section);

// button to add a book to the book lists
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const item = {
    id: Date.now(),
    title: title.value,
    author: author.value,
  };
  myMethod.addItem(item);
  appendBook(book, section, item, myMethod);
});

// functionality to display the booklist header when there is atleast one book in the list
if (data.length > 0) {
  book.appendChild(h1);
}

data.forEach((item) => {
  appendBook(book, section, item, myMethod);
});
