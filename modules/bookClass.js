import { data, form } from '../index.js';

class NewBook {
  constructor(section) {
    this.section = section;
  }

  addItem = (item) => {
    if (item) {
      data.push(item);
      localStorage.setItem('bookData', JSON.stringify(data));
    }
    form.reset();
  };

  deleteItem = (id, div) => {
    data.filter((val, ind, arr) => {
      if (id === val.id) {
        this.section.removeChild(div);
        arr.splice(ind, 1);
        return true;
      }
      return false;
    });
    localStorage.setItem('bookData', JSON.stringify(data));
  };
}

export default NewBook;
