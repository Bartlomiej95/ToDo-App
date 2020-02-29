export class Task {
    constructor(contentTask, checkbtnDone = false) {
        this.contentTask = contentTask;
        this.checkbtnDone = checkbtnDone;
        this.task = {
            contentTask: this.contentTask,
            checkbtnDone: this.checkbtnDone
        }


    }

    addingContentTask = (content, liElement, task) => {
        liElement.textContent = content;
        task.contentTask = content;
    }


    addBtnDone = (li) => {
        const btnDone = document.createElement('button');
        const i = document.createElement('i');

        i.classList.add('fas');
        i.classList.add('fa-check');

        btnDone.classList.add('app__list--btnDone');

        btnDone.appendChild(i);
        return li.appendChild(btnDone);

    }
    //dodajemy przycisk dodaj do elementu DOM, w którym jest nasz task
    addBtnRemove = (li) => {
        const btnRemove = document.createElement('button');
        btnRemove.textContent = '-';
        btnRemove.classList.add('app__list--btnRemove');

        return li.appendChild(btnRemove);
    }
    // dodajemy przycisk usuń, do funkcji przekazujemy obiekt event
    removeTask = (e) => {
        // this.task.removeTask(e.target.parentNode);
        e.preventDefault();
        e.target.parentNode.remove();


    }
    changeStatusTask(task) {
        task.checkbtnDone = !task.checkbtnDone;
        console.log('daj znak');
    }


}