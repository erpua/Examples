"use strict";

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};

const notepad = {
  notes: [],
  getNotes() {
    return this.notes;
  },
  findNoteById(id) {
    for (const note of this.notes) {
      if (note.id === id) {
        return note;
      }
    }
  },
  saveNote(note) {
    this.notes.push(note);
  },
  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);

    if (!note) return;
    console.log('Updated Content from server: ', updatedContent);
    note[updatedContent.field] = updatedContent.value;
  },
  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);

    if (!note) return;
    note.priority = priority;
    return note;
  },
  filterNotesByQuery(query = '') {
    const filteredNotes = [];

    for (const note of this.notes) {
      const hasQueryInTitle = note.title.toLowerCase().includes(query.toLowerCase());
      const hasQueryInody = note.body.toLowerCase().includes(query.toLowerCase());

      if (hasQueryInTitle || hasQueryInody) {
        filteredNotes.push(note);
      };
    }
    return filteredNotes;
  },
  filterNotesByPriority(priority) {

    const filteredByPriority = [];

    for (const note of this.notes) {
      if (note.priority === priority) filteredByPriority.push(note);
    }
    return filteredByPriority;
  },
  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const note = this.notes[i];
      if (note.id === id) {
        this.notes.splice(i, 1);
        return;
      }
    }
  },
};

notepad.saveNote({
  id: 1,
  title: "JavaScript essentials",
  body: "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
  priority: PRIORITY_TYPES.HIGH
});

notepad.saveNote({
  id: 2,
  title: "Refresh HTML and CSS",
  body: "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
  priority: PRIORITY_TYPES.NORMAL
});

notepad.saveNote({
  id: 3,
  title: "Get comfy with Frontend frameworks",
  body: "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
  priority: PRIORITY_TYPES.NORMAL
});

notepad.saveNote({
  id: 4,
  title: "Winter clothes",
  body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: PRIORITY_TYPES.LOW
});

console.log("Все текущие заметки: ", notepad.getNotes());

console.log('Found note by ID was: ', notepad.findNoteById(4));

console.log("Заметки после обновления приоритета для id 4: ", notepad.updateNotePriority(4, PRIORITY_TYPES.NORMAL));
console.log("Заметки после обновления приоритета для id 3: ", notepad.updateNotePriority(3, PRIORITY_TYPES.HIGH));

console.log('Отфильтровали заметки по ключевому слову "html": ', notepad.filterNotesByQuery("html"));
console.log('Отфильтровали заметки по ключевому слову "javascript": ', notepad.filterNotesByQuery("javascript"));

console.log("Отфильтровали заметки по нормальному приоритету: ", notepad.filterNotesByPriority(PRIORITY_TYPES.NORMAL));

/* Обновим контент заметки с id 3 */
notepad.updateNoteContent(3, {
  field: 'title',
  value: "Get comfy with React.js or Vue.js"
});
console.log("Заметки после обновления контента заметки с id 3: ", notepad.getNotes());

notepad.deleteNote(2);
console.log("Заметки после удаления с id 2: ", notepad.getNotes());