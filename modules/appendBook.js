const appendBook = (book, section, item, myMethod) => {
  const div = document.createElement('div');
  div.className = 'book_item';
  const h2 = document.createElement('h1');
  h2.className = 'book_description';
  h2.innerText = `${item.title.charAt(0).toUpperCase()}${item.title
    .split('')
    .splice(1)
    .join('')} by ${item.author.charAt(0).toUpperCase()}${item.author
    .split('')
    .splice(1)
    .join('')}`;
  const button = book.appendChild(document.createElement('button'));
  button.innerText = 'Remove';
  button.className = 'book_button';
  div.appendChild(h2);
  div.appendChild(button);
  section.appendChild(div);
  book.appendChild(section);
  button.addEventListener('click', () => {
    myMethod.deleteItem(item.id, div);
  });
};
export default appendBook;
