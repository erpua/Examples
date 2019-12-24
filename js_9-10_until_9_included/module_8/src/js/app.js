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

const initialNotes = [
  {
    id: 1,
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 2,
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 3,
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 4,
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

class Notepad {
  /*
  - Перенесите свойства и методы конструктора в класс
  - Copy properties and methods of constructor into the class

  - Замените метод getNotes геттером, чтобы можно было обратиться как notepad.notes,
   для этого создайте свойство _notes, в котором храните массив заметок,
   а геттер notes возвращает значение этого поля
  - Change method getNotes by getter, in order to call like notepad.notes,
  for that create _notes property, which saves array of notes,
  and getter return value 

   - Статический метод Notepad.getPriorityName() добавьте используя ES6 синтаксис
   и ключевое слово static
   - Add static method Notepad.getPriorityName() using Es6 syntax 
   and key word static
  */
  constructor(notes = []) {
    this._notes = notes;
  }
  get notes() {
    return this._notes;
  }
  /*
  - Статический метод Notepad.getPriorityName() добавьте используя ES6 синтаксис
   и ключевое слово static
   - Add static method Notepad.getPriorityName() using Es6 syntax 
   and key word static
*/
  static getPriorityName(priorityId) {
    let priorityValues = Object.values(this.PRIORITIES);

    for (const value of priorityValues) {
      if (value.id === priorityId) {
        return value.name;
      }
    }
  }

  /*
  - Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
  - Return: note with matched id or undefined if nothing
  */
  findNoteById(id) {
    for (const note of this._notes) {
      if (note.id === id) {
        return note;
      }
    }
  }
  /*
  - Сохраняет заметку в массив
  - Saves note into array
  */
  saveNote(note) {
    this._notes.push(note);
  }
  /*
  - Удаляет заметку по идентификатору из массива
  - Deletes note by (id)
  */
  deleteNote(id) {
    for (let i = 0; i < this._notes.length; i += 1) {
      let note = this._notes[i];
      if (note.id === id) {
        this._notes.splice(i, 1);
        return;
      }
    }
  }
  /*
  - Обновляет контент заметки
  - Updates note content
  */
  updateNoteContent(id, updatedContent) {
    let note = this.findNoteById(id);

    if (!note) return;
    note[updatedContent.field] = updatedContent.value;
  }
  /*
  - Обновляет приоритет заметки
  - Updates note priority
  */
  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);

    if (!note) return;
    note.priority = priority;
    return note;
  }
  /*
  - Фильтрует массив заметок по подстроке query
  - Filters notes by string query
  -  filterNotesByQuery(query) - other option
  */
  filterNotesByQuery(query = '') {
    const filteredNotesByQuery = [];

    for (const note of this._notes) {
      const hasQueryInTitle = note.title
        .toLowerCase()
        .includes(query.toLowerCase());
      const hasQueryInBody = note.body
        .toLowerCase()
        .includes(query.toLowerCase());

      if (hasQueryInTitle || hasQueryInBody) {
        filteredNotesByQuery.push(note);
      }
    }
    return filteredNotesByQuery;
  }
  /*
  - Фильтрует массив заметок по значению приоритета
  - Filters notes by (priority)
  */
  filterNotesByPriority(priority) {
    const filteredNotesByPriority = [];

    for (const note of this._notes) {
      if (note.priority === priority) {
        filteredNotesByPriority.push(note);
      }
    }
    return filteredNotesByPriority;
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

const createListItem = ({ id, title, body, priority }) => {
  const noteListItem = document.createElement('li');
  noteListItem.classList.add('note-list__item');
  noteListItem.dataset.id = id;

  const noteDiv = document.createElement('div');
  noteDiv.classList.add('note');
  noteDiv.append(createNoteContent(title, body), createNoteFooter(priority));

  noteListItem.appendChild(noteDiv);

  console.log(noteListItem);

  return noteListItem;
};

const listRef = document.querySelector('.note-list');

const renderNoteList = (listRef, notes) => {
  const renderListItem = initialNotes.map(item => createListItem(item));
  listRef.append(...renderListItem);
};

renderNoteList(listRef, notepad.notes);
