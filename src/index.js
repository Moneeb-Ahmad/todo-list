import './styles.css';
import intitalSetUp from './intialLoad.js';
import {ToDo} from './todo.js';
import {format} from 'date-fns';
import {Constants} from './constants.js';
import {Project} from './project.js';

document.body.appendChild(intitalSetUp());

let dt = format(new Date(2022,6,20), 'MMM-dd');
let p = new Project("1");
const todo = new ToDo("Work","Finish thing",`${dt}`,Constants.HIGH_PRIORITY);
const todo2 = new ToDo("new guy","new task",`${dt}`,Constants.HIGH_PRIORITY);


console.log(todo.toString());
todo.setTitle("New Title");
console.log(todo.toString());
p.add(todo);
p.add(todo2);
console.log(p.toString());
