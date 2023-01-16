import { data, form } from '../index.js';

class NewBook {
  constructor(section) {
    this.section = section;
  }

  addItem = (item) => {
    if (data.length === 0) {
      window.location.reload();
    }
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
    if (data.length < 1) {
      window.location.reload();
    }
  };
}

export default NewBook;
