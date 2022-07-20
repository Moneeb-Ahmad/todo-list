import './styles.css';
import {ToDo} from './todo.js';
import {format} from 'date-fns';
import {Constants} from './constants.js';

let dt = format(new Date(2022,6,20), 'MMM-dd');
const todo = new ToDo("Work","Finish thing",`${dt}`,Constants.HIGH_PRIORITY);



console.log(todo.toString());
todo.setTitle("New Title");
console.log(todo.toString());
