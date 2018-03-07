import './list.sass';
import 'ress';

export default (array, className) => {
  const list = document.createElement('ul');
  list.className = className;

  let listItems = '';
  array.forEach((item) => listItems += `<li> ${item} </li>`);

  list.innerHTML = listItems;

  return list;
};
