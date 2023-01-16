/* eslint-disable import/no-cycle */
// eslint-disable-next-line object-curly-newline
import { newForm, book, contact } from '../index.js';

const handleDisplay = (element) => {
  if (element.innerText === 'Add new') {
    newForm.style.display = 'contents';
  } else if (element.innerText === 'List') {
    book.style.display = 'contents';
  } else if (element.innerText === 'Contact') {
    contact.style.display = 'contents';
  }
};
export default handleDisplay;
