import _ from 'lodash';

function intitalSetUp() {
  const element = document.createElement('div');
  const top = document.createElement('div');
  const bottom = document.createElement('div');
  const addTask = document.createElement('button');
  const sidePanel = document.createElement('div');
  const projectList = document.createElement('div');
  const addProject = document.createElement('button');
  const content = document.createElement('div');

  element.classList.add("container");
  top.classList.add("top");
  bottom.classList.add("bottom");
  addTask.classList.add("add-task");
  addProject.classList.add("add-project");
  sidePanel.classList.add("side-panel");
  projectList.classList.add("project-list");
  content.classList.add("content");


  addTask.textContent = "Add Task";
  addProject.textContent = "Add Project";
  sidePanel.textContent = "Projects"
  content.textContent = "To-Do List"

  top.appendChild(addTask);
  sidePanel.appendChild(projectList);
  sidePanel.appendChild(addProject);
  bottom.appendChild(sidePanel);
  bottom.appendChild(content);
  element.appendChild(top);
  element.appendChild(bottom);
  return element;
}
export {
  intitalSetUp as default
};
