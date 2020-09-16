function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();

        let title = newToDoText.value;
        
        let newLi = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';


        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored';
  componentHandler.upgradeElement(deleteBtn);
        deleteBtn.addEventListener('click', function(event){
            toDoList.removeChild(this.parentElement);
        })

        newLi.textContent = title;

        newLi.appendChild(checkbox);
        newLi.appendChild(deleteBtn);
        toDoList.appendChild(newLi);
        newToDoText.value = '';
    });
}

window.onload = function() {
    onReady();
};


