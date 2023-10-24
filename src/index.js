import './styles.css';
import Note from './Note.js';

const noteArray = [];
noteArray.push(new Note('Hello There', "This is not a Note, but I'm another note", '' ,'', ''));

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

  const homeElement = document.createElement('h2');
  const buttonElement = document.createElement('button');

  element.classList.add('tab');
  element.setAttribute('id', 'tab');
  buttonElement.setAttribute('id', 'addProjectButton');

  homeElement.innerHTML = 'Projects';
  buttonElement.innerHTML = 'Add Project';

  element.appendChild(homeElement);
  element.appendChild(buttonElement);

  return element;
}

function dialogProject() {
  const element = document.createElement('div');
  const dialogElement = document.createElement('div');

  const formElement = document.createElement('form');
  const fieldsetElement = document.createElement('fieldset');

  dialogElement.classList.add('projectModal');
  dialogElement.setAttribute('id', 'projectModal');

  element.appendChild(dialogElement);
  dialogElement.appendChild(formElement);
  formElement.appendChild(fieldsetElement);

  return element;
}

function home() {
  const defaultNote = new Note('Hello', 'This is a Note', '21-10-23', '2' ,'false');
  const tabElement = document.createElement('div');
  const element = document.createElement('div');
  const backgroundElement0 = document.createElement('div');
  const backgroundElement = document.createElement('div');
  const nameElement = document.createElement('div');
  const nameElement2 = document.createElement('div');
  const addElement = document.createElement('div');

  tabElement.classList.add('tab');
  element.classList.add('home');
  element.setAttribute('id', 'home');
  backgroundElement0.classList.add('background');
  backgroundElement.classList.add('background');
  nameElement.classList.add('note');
  nameElement2.classList.add('note');

  element.appendChild(backgroundElement0);
  element.appendChild(backgroundElement);
  backgroundElement.appendChild(nameElement);
  backgroundElement.appendChild(nameElement2);
  backgroundElement.appendChild(addElement);

  const projectName = document.createElement('h1');
  const restaurantName = document.createElement('h1');
  const restaurantDesc = document.createElement('h3');
  const restaurantName2 = document.createElement('h1');
  const restaurantDesc2 = document.createElement('h3');
  const addButton = document.createElement('button');

  projectName.innerHTML = 'Project Title';
  restaurantName.innerHTML = defaultNote.getNote();
  restaurantDesc.innerHTML = defaultNote.getDesc();
  restaurantName2.innerHTML = noteArray[0].getNote();
  restaurantDesc2.innerHTML = noteArray[0].getDesc();
  addButton.innerHTML = 'Add Task';

  backgroundElement0.appendChild(projectName);
  nameElement.appendChild(restaurantName);
  nameElement.appendChild(restaurantDesc);
  nameElement2.appendChild(restaurantName2);
  nameElement2.appendChild(restaurantDesc2);
  addElement.appendChild(addButton);

  return element;
}

function footer(){
  const element = document.createElement('div');
    element.classList.add('footer');

    const copyElement = document.createElement('p');

    copyElement.innerHTML = 'Copyright @ Siftben 2023';

    element.appendChild(copyElement);

    return element;
}
  
document.getElementById('content').appendChild(main());
document.getElementById('main').appendChild(tab());
document.getElementById('tab').appendChild(dialogProject());
document.getElementById('main').appendChild(home());

