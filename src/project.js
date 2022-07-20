import _ from 'lodash';

class Project {
  #projects;
  #title;
  constructor(title) {
    this.projects = new Set();
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle
  }

  add(item) {
    this.projects.add(item);
  }

  delete(item) {
    this.projects.delete(item);
  }

  toString() {
    /*let res = "";
    let ind = 1;
    this.projects.forEach(function(value) {
      res += `Item ${ind}:[${value}] `;
      ind++;
    });
    return res;*/
    return `Project: ${this.title}`;
  }
}

export {Project};
