'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [{
    id: 1,
    title: 'JavaScript essentials',
    body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 2,
    title: 'Refresh HTML and CSS',
    body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 3,
    title: 'Get comfy with Frontend frameworks',
    body: 'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 4,
    title: 'Winter clothes',
    body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

class Notepad {
  static generateUniqueId = () =>
    Math.random()
    .toString(36)
    .substring(2, 15) +
    Math.random()
    .toString(36)
    .substring(2, 15);

  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  save(newTitle, text) {
    const newItem = {
      id: Notepad.generateUniqueId(),
      title: newTitle,
      body: text,
    };

    this._notes.push(newItem);

    return newItem;
  }

  /*  
  -Удаляет заметку по созданному generateUniqueId
  -  Deletes note by newGenerated ID (id)
  */
  delete(id) {
    this._notes = this._notes.filter(note => note.id !== id);
  }

  /*
  - Статический метод Notepad.getPriorityName() добавьте используя ES6 синтаксис
   и ключевое слово static
   - Add static method Notepad.getPriorityName() using Es6 syntax 
   and key word static
*/
  filteredNotesByQuery(query = '') {

    return this._notes.filter(
      note =>
      note.body.toLowerCase().includes(query.toLowerCase()) ||
      note.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  static getPriorityName(priorityId) {
    let priorityValues = Object.values(this.PRIORITIES);

    for (const value of priorityValues) {
      if (value.id === priorityId) {
        return value.name;
      }
    }
  }

  filterNotesByPriority(priority) {
    const filteredByPriorityNotes = [];
    for (const note of this._notes) {
      if (note.priority === priority) {
        filteredByPriorityNotes.push(note);
        return filteredByPriorityNotes;
      }
    }
  }


}

/* Static property of Notepad*/

Notepad.PRIORITIES = {
  0: {
    id: 0,
    value: 0,
    name: 'Low',
  },
  1: {
    id: 1,
    value: 1,
    name: 'Normal',
  },
  2: {
    id: 2,
    value: 2,
    name: 'High',
  },
};

const notepad = new Notepad(initialNotes);
console.log(notepad.notes);

const refs = {
  list: document.querySelector('.note-list'),
  editor: document.querySelector('.note-editor'),
  filter: document.querySelector('.search-form__input'),
};
console.log('refs.list', refs.list);
console.log('refs.editor', refs.editor);
console.log('refs.filter', refs.filter);

/* 
  - создаем тело елемента-заметки и передаем данные из initialNotes
  - create full body of note-element and pass initialNotes data
*/

const createNoteContent = (title, body) => {
  const contentBox = document.createElement('div');
  contentBox.classList.add('note__content');

  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('note__title');
  noteTitle.textContent = title;

  const noteParagraph = document.createElement('p');
  noteParagraph.classList.add('note__body');
  noteParagraph.textContent = body;

  contentBox.append(noteTitle, noteParagraph);

  return contentBox;
};

/* 
  - Создаем елементы Button в теле заметки и возвращает ссылку на них
  - Create Button elements in note body and return its link 
*/

const createActionButton = (iconArrowType, noteActionPriorityType) => {
  const actionButton = document.createElement('button');
  actionButton.classList.add('action');
  actionButton.dataset.action = noteActionPriorityType;

  const iconButton = document.createElement('i');
  iconButton.classList.add('material-icons', 'action__icon');
  iconButton.textContent = iconArrowType;

  actionButton.appendChild(iconButton);

  return actionButton;
};

/*
 - Cоздаем футер елемента-заметки и возвращает ссылку на него
 - Creating and returning of element-note footer 
*/
const createNoteFooter = priority => {
  const noteFooter = document.createElement('footer');
  noteFooter.classList.add('note__footer');

  const changingPrioritySection = document.createElement('section');
  changingPrioritySection.classList.add('note__section');
  changingPrioritySection.appendChild(
    createActionButton(ICON_TYPES.ARROW_DOWN, NOTE_ACTIONS.DECREASE_PRIORITY)
  );

  changingPrioritySection.appendChild(
    createActionButton(ICON_TYPES.ARROW_UP, NOTE_ACTIONS.INCREASE_PRIORITY)
  );

  const notePrioritySpan = document.createElement('span');
  notePrioritySpan.classList.add('note__priority');
  notePrioritySpan.textContent = `Priority: ${Notepad.getPriorityName(
    priority
  )}`;

  changingPrioritySection.appendChild(notePrioritySpan);

  const changingNoteSection = document.createElement('section');
  changingNoteSection.classList.add('note__section2');
  changingNoteSection.appendChild(createActionButton('edit', ICON_TYPES.EDIT));
  changingNoteSection.appendChild(
    createActionButton('delete', ICON_TYPES.DELETE)
  );

  noteFooter.append(changingPrioritySection, changingNoteSection);

  return noteFooter;
};

/* 
 - Функция создает DOM элемент(заметку) и возвращает ссылку на него
 - creating and return DOM spot
*/

const createListItem = ({
  id,
  title,
  body,
  priority
}) => {
  const noteListItem = document.createElement('li');
  noteListItem.classList.add('note-list__item');
  noteListItem.dataset.id = id;

  const noteDiv = document.createElement('div');
  noteDiv.classList.add('note');
  noteDiv.append(createNoteContent(title, body), createNoteFooter(priority));

  noteListItem.appendChild(noteDiv);

  //console.log(noteListItem);

  return noteListItem;
};

//const listRef = document.querySelector('.note-list');

const renderNoteList = (listRef, notes) => {
  const listItems = notes.map(note => createListItem(note));
  listRef.innerHTML = '';
  listRef.append(...listItems);
};

const addItemsToList = (listRef, note) => {
  const listItem = createListItem(note);
  listRef.appendChild(listItem);
};

const handleEditorSubmit = event => {
  event.preventDefault();
  const [inputTitle, inputBody] = event.currentTarget.elements
  const titleValue = inputTitle.value
  const bodyValue = inputBody.value
  if (titleValue.trim() === '' || bodyValue.trim() === '') {
    return alert('Необходимо заполнить все поля!');
  }
  const savedItem = notepad.save(titleValue, bodyValue)

  addItemsToList(refs.list, savedItem)
  event.currentTarget.reset()
}

const handleFilterChange = event => {
  event.preventDefault();
  const filteredItems = notepad.filteredNotesByQuery(event.target.value)
  console.log('filteredItems:', filteredItems)
  renderNoteList(refs.list, filteredItems)
}

const removeListItem = element => {
  const parentListItem = element.closest('.note-list__item');

  const id = parentListItem.dataset.id;
  notepad.delete(id);
  parentListItem.remove();
  console.log('notepad._notes', notepad._notes);
};

const handleListClick = ({
  target
}) => {
  if (target.nodeName !== 'I') return;
  target.dataset.action = 'delete-note';

  const action = target.dataset.action;

  switch (action) {
    case NOTE_ACTIONS.DELETE:
      console.log('deleted');
      removeListItem(target);
      break;
    default:
      console.log('target:', target);
      break;
  }
};

renderNoteList(refs.list, notepad.notes);

//Listeners
refs.editor.addEventListener('submit', handleEditorSubmit)
refs.filter.addEventListener('input', handleFilterChange);
refs.list.addEventListener('click', handleListClick);
