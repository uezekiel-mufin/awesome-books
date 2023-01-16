/* eslint-disable import/no-cycle */
// eslint-disable-next-line object-curly-newline
import { newForm, book, li, contact } from '../index.js';
import handleDisplay from './handleDisplay.js';

const displaySection = (item) => {
  item.addEventListener('click', (e) => {
    li.forEach((item) => {
      item.classList.remove('active');
      newForm.style.display = 'none';
      contact.style.display = 'none';
      book.style.display = 'none';
    });
    e.target.classList.toggle('active');
    handleDisplay(e.target);
  });
};

export default displaySection;
