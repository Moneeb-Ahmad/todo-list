import _ from 'lodash';

class ToDo {
  #title;
  #description;
  #dueDate;
  #priority;
  constructor(title,description,dueDate,priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  getPriority() {
    return this.priority;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }

  setDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  setPriority(newPriority) {
    this.priority = newPriority;
  }

  toString() {
    return `Title: ${this.title}, Description: ${this.description}, ` +
            `Due-Date: ${this.dueDate}, Priority: ${this.priority}`;
  }
}

export {ToDo};
