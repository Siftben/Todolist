import './styles.css';
import Note from './Note.js';

function header() {
    const element = document.createElement('div');
    element.classList.add('header');

    const title = document.createElement('h1');

    title.innerHTML = "To-Do-List";

    element.appendChild(title);

    return element;
  }

function main() {
  const element = document.createElement('div');

  element.classList.add('main');
  element.setAttribute('id', 'main');

  return element;
}

function tab() {
  const element = document.createElement('div');

  element.classList.add('tab');
  element.setAttribute('id', 'tab');

  return element;
}

function home() {
  const defaultNote = new Note('Hello', 'This is a Note', '21-10-23', '2' ,'false');
  const tabElement = document.createElement('div');
  const element = document.createElement('div');
  const backgroundElement = document.createElement('div');
  const nameElement = document.createElement('div');
  const nameElement2 = document.createElement('div');

  tabElement.classList.add('tab');
  element.classList.add('home');
  element.setAttribute('id', 'home');
  backgroundElement.classList.add('background');
  nameElement.classList.add('note');
  nameElement2.classList.add('note')

  element.appendChild(backgroundElement);
  backgroundElement.appendChild(nameElement);
  backgroundElement.appendChild(nameElement2);

  const restaurantName = document.createElement('h1');
  const restaurantDesc = document.createElement('h3');

  const restaurantName2 = document.createElement('h1');
  const restaurantDesc2 = document.createElement('h3');

  restaurantName.innerHTML = defaultNote.getNote();
  restaurantDesc.innerHTML = defaultNote.getDesc();

  restaurantName2.innerHTML = defaultNote.getNote();
  restaurantDesc2.innerHTML = defaultNote.getDesc();

  nameElement.appendChild(restaurantName);
  nameElement.appendChild(restaurantDesc);

  nameElement2.appendChild(restaurantName2);
  nameElement2.appendChild(restaurantDesc2);

  return element;
}

function footer(){
  const element = document.createElement('div');
    element.classList.add('footer');

    const copyElement = document.createElement('p');

    copyElement.innerHTML = 'Made by Siftben @2023';

    element.appendChild(copyElement);

    return element;
}
  
document.getElementById('content').appendChild(header());
document.getElementById('content').appendChild(main());
document.getElementById('main').appendChild(tab());
document.getElementById('main').appendChild(home());
document.getElementById('content').appendChild(footer());