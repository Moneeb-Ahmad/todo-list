import _ from 'lodash';
class DomCreation {
  createDiv(obj, op) {
    const element = document.createElement('div');

    switch (op) {
      case 1:
        element.textContent = obj.toString();
        break;
      case 2:
        element.innerHTML = obj.toHTML();
        const btnDiv = document.createElement('div');
        const editBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        btnDiv.classList.add("btn-div");
        editBtn.textContent = "Edit";
        delBtn.textContent = "Delete";
        editBtn.classList.add("edit");
        delBtn.classList.add("delete");
        btnDiv.appendChild(editBtn);
        btnDiv.appendChild(delBtn);
        element.appendChild(btnDiv);
      default:
        break;
    }
    return element;
  }

}

export {DomCreation};
