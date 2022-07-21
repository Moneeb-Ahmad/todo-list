import './styles.css';
import intitalSetUp from './intialLoad.js';
import {ToDo} from './todo.js';
import {format} from 'date-fns';
import {Constants} from './constants.js';
import {Project} from './project.js';
import {DomCreation} from './domCreation.js';

document.body.appendChild(intitalSetUp());
const container = document.querySelector('.container');
const projectList = document.querySelector('.project-list');
const content = document.querySelector('.content');
const addTask = document.querySelector('.add-task');
const addProject = document.querySelector('.add-project');

let dt = format(new Date(2022,6,20), 'MMM-dd');
let p = new Project("First Project!");
let currentProject = p;
const todo = new ToDo("Work","Finish thing",`${dt}`,Constants.HIGH_PRIORITY);
const todo2 = new ToDo("New guy","New task",`${dt}`,Constants.HIGH_PRIORITY);
let dom = new DomCreation();
let projSet = new Project("Project List");
p.add(todo);
p.add(todo2);
projSet.add(p);

projectList.appendChild(dom.createDiv(p,1));
content.appendChild(dom.createDiv(todo,2));
content.appendChild(dom.createDiv(todo2,2));

function removeAllChildrenFromContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

/**********Tasks*******************/
function openFormTask() {
  document.querySelector(".pop-ups").style.display = "inline";
  document.querySelector(".task-form").style.display = "inline";
  document.querySelector(".btn-cancel-task").addEventListener('click',closeFormTask);
  document.querySelector(".btn-add-task").addEventListener('click',addTaskToCurrentProject);
}

function addTaskToCurrentProject() {
  let newTitle = document.querySelector('.task-form').firstChild.title.value;
  let newDesc = document.querySelector('.task-form').firstChild.desc.value;
  let newTaskDate = document.querySelector('.task-form').firstChild['task-date'].value;
  let newPrior = document.querySelector('.task-form').firstChild.prior.value;
  let newT = new ToDo(newTitle,newDesc,newTaskDate,newPrior);
  let noti = currentProject.add(newT);
  if(noti) {
    closeFormTask();
    displayContentsTaskUpdate();
  }
  else {
    alert("That Tasks Already Exists in this project!");
    closeFormTask();
  }

}

function displayContentsTaskUpdate() {
  removeAllChildrenFromContent()
  for(const to in currentProject.getObj()) {
    content.appendChild(dom.createDiv(currentProject.getValue(to),2));
  }
}

function closeFormTask() {
  document.querySelector(".btn-cancel-task").removeEventListener('click',closeFormTask);
  document.querySelector(".btn-add-task").removeEventListener('click',closeFormTask);
  document.querySelector(".task-form").style.display = "none";
  document.querySelector(".pop-ups").style.display = "none";
}
/*********Projects***********/
function openFormProject() {
  document.querySelector(".pop-ups").style.display = "inline";
  document.querySelector(".project-form").style.display = "inline";
  document.querySelector(".btn-cancel-project").addEventListener('click',closeFormProject);
  document.querySelector(".btn-add-project").addEventListener('click',addToProjectSet);
}

function addToProjectSet() {
  let newPText = document.querySelector('.project-form').firstChild.title.value;
  let newP = new Project(newPText);
  console.log(newP);
  projSet.add(newP);
  projectList.appendChild(dom.createDiv(projSet.getValue(newP),1));
  updateProjectEventListeners();
  closeFormProject();
}

function updateProjectEventListeners() {
  let len = projectList.childElementCount;
  const projChildren = projectList.children;
  for(let i = 0; i < len; i++) {
    projChildren.item(i).removeEventListener('click',displayContentsEvent);
    projChildren.item(i).addEventListener('click',displayContentsEvent);
  }
}

function displayContentsEvent(e) {
  removeAllChildrenFromContent()
  let proj = projSet.getValue(e.target.innerText);
  currentProject = proj;
  for(const to in proj.getObj()) {
    content.appendChild(dom.createDiv(proj.getValue(to),2));
  }
}

function closeFormProject() {
  document.querySelector(".btn-cancel-project").removeEventListener('click',closeFormTask);
  document.querySelector(".btn-add-project").removeEventListener('click',addToProjectSet);
  document.querySelector(".project-form").style.display = "none";
  document.querySelector(".pop-ups").style.display = "none";
}
/*******Edits********/
function openFormEdit() {
  document.querySelector(".pop-ups").style.display = "inline";
  document.querySelector(".edit-task-form").style.display = "inline";
  document.querySelector(".btn-cancel-edit").addEventListener('click',closeFormEdit);
  document.querySelector(".btn-add-edit").addEventListener('click',closeFormEdit);
}

function closeFormEdit() {
  document.querySelector(".btn-cancel-edit").removeEventListener('click',closeFormTask);
  document.querySelector(".btn-add-edit").removeEventListener('click',closeFormTask);
  document.querySelector(".edit-task-form").style.display = "none";
  document.querySelector(".pop-ups").style.display = "none";
}
/*******Delete********/
function deleteTask() {

}

const edit = document.querySelector('.edit');
const del = document.querySelector('.delete');
addTask.addEventListener('click',openFormTask);
addProject.addEventListener('click',openFormProject);
edit.addEventListener('click',openFormEdit);
del.addEventListener('click',deleteTask);
