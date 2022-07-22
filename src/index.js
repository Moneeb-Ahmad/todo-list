import './styles.css';
import intitalSetUp from './intialLoad.js';
import {
  ToDo
} from './todo.js';
import {
  format
} from 'date-fns';
import {
  Constants
} from './constants.js';
import {
  Project
} from './project.js';
import {
  DomCreation
} from './domCreation.js';

document.body.appendChild(intitalSetUp());
const container = document.querySelector('.container');
const projectList = document.querySelector('.project-list');
const content = document.querySelector('.content');
const addTask = document.querySelector('.add-task');
const addProject = document.querySelector('.add-project');

let dt = format(new Date(2022, 6, 20), 'MMM-dd');
let p = new Project("First Project!");
let currentProject = p;
const todo = new ToDo("Work", "Finish thing", `${dt}`, Constants.HIGH_PRIORITY);
const todo2 = new ToDo("New guy", "New task", `${dt}`, Constants.HIGH_PRIORITY);
let dom = new DomCreation();
let projSet = new Project("Project List");
let editT = null;
p.add(todo);
p.add(todo2);
projSet.add(p);

projectList.appendChild(dom.createDiv(p, 1));
content.appendChild(dom.createDiv(todo, 2));
content.appendChild(dom.createDiv(todo2, 2));

updateTaskEventListeners();

function removeAllChildrenFromContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

/**********Tasks*******************/
function openFormTask() {
  document.querySelector(".pop-ups").style.display = "inline";
  document.querySelector(".task-form").style.display = "inline";
  document.querySelector(".btn-cancel-task").addEventListener('click', closeFormTask);
  document.querySelector(".btn-add-task").addEventListener('click', addTaskToCurrentProject);
}

function addTaskToCurrentProject() {
  let newTitle = document.querySelector('.task-form').firstChild.title.value;
  let newDesc = document.querySelector('.task-form').firstChild.desc.value;
  let newTaskDateTemp = document.querySelector('.task-form').firstChild['task-date'].value;
  let arr = newTaskDateTemp.split('-');
  let newTaskDate = format(new Date(Number(arr[0]), (Number(arr[1]) - 1), Number(arr[2])), 'MMM-dd');
  let newPrior = document.querySelector('.task-form').firstChild.prior.value;
  let newT = new ToDo(newTitle, newDesc, newTaskDate, newPrior);
  let noti = currentProject.add(newT);
  if (noti) {
    closeFormTask();
    displayContentsTaskUpdate();
    updateTaskEventListeners();
  } else {
    alert("That Tasks Already Exists in this project!");
    closeFormTask();
  }

}

function updateTaskEventListeners() {
  let len = content.childElementCount;
  const contentChildren = content.children;
  for (let i = 0; i < len; i++) {
    contentChildren.item(i).children.item(4).firstChild.removeEventListener('click', openFormEdit);
    contentChildren.item(i).children.item(4).lastChild.removeEventListener('click', deleteTask);
    contentChildren.item(i).children.item(4).firstChild.addEventListener('click', openFormEdit);
    contentChildren.item(i).children.item(4).lastChild.addEventListener('click', deleteTask);
  }
}

function displayContentsTaskUpdate() {
  removeAllChildrenFromContent()
  for (const to in currentProject.getObj()) {
    content.appendChild(dom.createDiv(currentProject.getValue(to), 2));
  }
}

function closeFormTask() {
  document.querySelector(".btn-cancel-task").removeEventListener('click', closeFormTask);
  document.querySelector(".btn-add-task").removeEventListener('click', closeFormTask);
  document.querySelector(".task-form").style.display = "none";
  document.querySelector(".pop-ups").style.display = "none";
}
/*********Projects***********/
function openFormProject() {
  document.querySelector(".pop-ups").style.display = "inline";
  document.querySelector(".project-form").style.display = "inline";
  document.querySelector(".btn-cancel-project").addEventListener('click', closeFormProject);
  document.querySelector(".btn-add-project").addEventListener('click', addToProjectSet);
}

function addToProjectSet() {
  let newPText = document.querySelector('.project-form').firstChild.title.value;
  let newP = new Project(newPText);
  projSet.add(newP);
  projectList.appendChild(dom.createDiv(projSet.getValue(newP), 1));
  updateProjectEventListeners();
  closeFormProject();
}

function updateProjectEventListeners() {
  let len = projectList.childElementCount;
  const projChildren = projectList.children;
  for (let i = 0; i < len; i++) {
    projChildren.item(i).removeEventListener('click', displayContentsEvent);
    projChildren.item(i).addEventListener('click', displayContentsEvent);
  }
}

function displayContentsEvent(e) {
  removeAllChildrenFromContent()
  let proj = projSet.getValue(e.target.innerText);
  currentProject = proj;
  for (const to in proj.getObj()) {
    content.appendChild(dom.createDiv(proj.getValue(to), 2));
  }
  updateTaskEventListeners();
}

function closeFormProject() {
  document.querySelector(".btn-cancel-project").removeEventListener('click', closeFormTask);
  document.querySelector(".btn-add-project").removeEventListener('click', addToProjectSet);
  document.querySelector(".project-form").style.display = "none";
  document.querySelector(".pop-ups").style.display = "none";
}
/*******Edits********/
function openFormEdit(e) {
  const parentText = e.target.parentElement.parentElement.innerText
  const arr = parentText.replaceAll('\n', ',').split(",");
  editT = new ToDo(arr[0], arr[1], arr[2], arr[3]);
  /*console.log(currentProject.getValue(existingT) instanceof ToDo);*/
  document.querySelector(".pop-ups").style.display = "inline";
  document.querySelector(".edit-task-form").style.display = "inline";
  document.querySelector(".btn-cancel-edit").addEventListener('click', closeFormEdit);
  document.querySelector(".btn-add-edit").addEventListener('click', updateToDoItem);
}

function updateToDoItem() {
  let newTitle = document.querySelector('.edit-task-form').firstChild.title.value;
  let newDesc = document.querySelector('.edit-task-form').firstChild.desc.value;
  let newTaskDateTemp = document.querySelector('.edit-task-form').firstChild['task-date'].value
  let arr = newTaskDateTemp.split('-');
  let newTaskDate = format(new Date(Number(arr[0]), (Number(arr[1]) - 1), Number(arr[2])), 'MMM-dd');
  let newPrior = document.querySelector('.edit-task-form').firstChild.prior.value;
  let newT = new ToDo(newTitle, newDesc, newTaskDate, newPrior);
  if (newT.toString() === editT.toString()) {
    closeFormEdit();
    alert("That exact task already exists in this project!");
  } else {
    let temp = currentProject.getValue(editT);
    temp.setTitle(newT.getTitle());
    temp.setDescription(newT.getDescription());
    temp.setDueDate(newT.getDueDate());
    temp.setPriority(newT.getPriority());
    currentProject.delete(editT);
    currentProject.add(temp);
    closeFormEdit();
    displayContentsTaskUpdate();
    updateTaskEventListeners();
  }
}

function closeFormEdit() {
  document.querySelector(".btn-cancel-edit").removeEventListener('click', closeFormTask);
  document.querySelector(".btn-add-edit").removeEventListener('click', closeFormTask);
  document.querySelector(".edit-task-form").style.display = "none";
  document.querySelector(".pop-ups").style.display = "none";
}
/*******Delete********/
function deleteTask(e) {
  const parentText = e.target.parentElement.parentElement.innerText
  const arr = parentText.replaceAll('\n', ',').split(",");
  let delT = new ToDo(arr[0], arr[1], arr[2], arr[3]);
  currentProject.delete(delT);
  displayContentsTaskUpdate();
  updateTaskEventListeners();
}

const edit = document.querySelector('.edit');
const del = document.querySelector('.delete');
addTask.addEventListener('click', openFormTask);
addProject.addEventListener('click', openFormProject);
edit.addEventListener('click', openFormEdit);
del.addEventListener('click', deleteTask);
