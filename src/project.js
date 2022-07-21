import _ from 'lodash';

class Project {
  #projects;
  #title;
  constructor(title) {
    this.projects = {};
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle
  }

  add(item) {
    if(this.projects[item] === undefined) {
      this.projects[item] = item;
      return true;
    }
    return false;
  }

  delete(item) {
    if(this.projects[item] !== undefined) {
      delete this.projects[item];
      return true;
    }
    return false;
  }

  getValue(item) {
    return this.projects[item];
  }

  getObj() {
    return this.projects;
  }

  toString() {
    /*let res = "";
    let ind = 1;
    this.projects.forEach(function(value) {
      res += `Item ${ind}:[${value}] `;
      ind++;
    });
    return res;*/
    return `${this.title}`;
  }
}

export {Project};
