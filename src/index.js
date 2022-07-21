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
let dt = format(new Date(2022,6,20), 'MMM-dd');
let p = new Project("First Project!");
const todo = new ToDo("Work","Finish thing",`${dt}`,Constants.HIGH_PRIORITY);
const todo2 = new ToDo("new guy","new task",`${dt}`,Constants.HIGH_PRIORITY);
let dom = new DomCreation();




console.log(todo.toString());
todo.setTitle("New Title");
console.log(todo.toString());
p.add(todo);
p.add(todo2);
console.log(p.toString());
console.log(p);

projectList.appendChild(dom.createDiv(p,1));
content.appendChild(dom.createDiv(todo,2));
content.appendChild(dom.createDiv(todo2,2));

function openFormTask() {
  document.querySelector(".pop-ups").style.display = "inline";
  document.querySelector(".task-form").style.display = "inline";
  document.querySelector(".btn-cancel-task").addEventListener('click',closeFormTask);
  document.querySelector(".btn-add-task").addEventListener('click',closeFormTask);
}

function closeFormTask() {
  document.querySelector(".btn-cancel-task").removeEventListener('click',closeFormTask);
  document.querySelector(".btn-add-task").removeEventListener('click',closeFormTask);
  document.querySelector(".task-form").style.display = "none";
  document.querySelector(".pop-ups").style.display = "none";
}

addTask.addEventListener('click',openFormTask);
