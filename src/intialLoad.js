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
  const popUps = document.createElement('div');

  element.classList.add("container");
  top.classList.add("top");
  bottom.classList.add("bottom");
  popUps.classList.add("pop-ups");
  addTask.classList.add("add-task");
  addProject.classList.add("add-project");
  sidePanel.classList.add("side-panel");
  projectList.classList.add("project-list");
  content.classList.add("content");


  const taskForm = createForms(1);
  const projectForm = createForms(2);
  const editTaskForm = createForms(3);
  addTask.textContent = "Add Task";
  addProject.textContent = "Add Project";
  sidePanel.textContent = "Projects:"

  top.appendChild(addTask);
  sidePanel.appendChild(projectList);
  sidePanel.appendChild(addProject);
  bottom.appendChild(sidePanel);
  bottom.appendChild(content);
  popUps.appendChild(taskForm);
  popUps.appendChild(projectForm);
  popUps.appendChild(editTaskForm);
  element.appendChild(top);
  element.appendChild(bottom);
  element.appendChild(popUps);
  return element;
}

function createForms(op) {
  const element = document.createElement('div');
  switch (op) {
    case 1:
      element.classList.add('task-form');
      element.innerHTML =
      `<form AcTION="" METHOD="GET" class="form-container">
        <h1>Add a New Task</h1>
        <label for="title"><b>Title*</b></label>
        <input type="text" name="title" required>
        <label for="desc"><b>Description*</b></label>
        <input type="text" name="desc" required>
        <label for="task-date"><b>Due Date*</b></label>
        <input type="date" name="task-date" required>
        <label for="prior"><b>Priority*</b></label>
        <div class="priority-selectors">
          <div>
            <input type="radio" name="prior" value="Low" required> Low
          </div>
          <div>
            <input type="radio" name="prior" value="Medium" required> Medium
          </div>
          <div>
            <input type="radio" name="prior" value="High" required> High
          </div>
        </div>
        <button type="button" class="btn-add-task">Add</button>
        <button type="button" class="btn-cancel-task">Close</button>
      </form>`;
      break;
    case 2:
      element.classList.add('project-form');
      element.innerHTML =
      `<form AcTION="" METHOD="GET" class="form-container">
        <h1>Add a New Project</h1>
        <label for="title"><b>Title*</b></label>
        <input type="text" name="title" required>
        <button type="button" class="btn-add-project">Add</button>
        <button type="button" class="btn-cancel-project">Close</button>
      </form>`;
      break;
    case 3:
      element.classList.add('edit-task-form');
      element.innerHTML =
      `<form AcTION="" METHOD="GET" class="form-container">
        <h1>Edit Task</h1>
        <label for="title"><b>Title*</b></label>
        <input type="text" name="title" required>
        <label for="desc"><b>Description*</b></label>
        <input type="text" name="desc" required>
        <label for="task-date"><b>Due Date*</b></label>
        <input type="date" name="task-date" required>
        <label for="prior"><b>Priority*</b></label>
        <div class="priority-selectors">
          <div>
            <input type="radio" name="prior" value="Low" required> Low
          </div>
          <div>
            <input type="radio" name="prior" value="Medium" required> Medium
          </div>
          <div>
            <input type="radio" name="prior" value="High" required> High
          </div>
        </div>
        <button type="button" class="btn-add-edit">Add</button>
        <button type="button" class="btn-cancel-edit">Close</button>
      </form>`;
      break;
    default:
      break;
  }
  return element;
}
export {
  intitalSetUp as default
};
