import {
    Task
} from './Task.js';

export class ListofTasks {

    constructor() {
        this.task = new Task();
        this.listofTasks = [];
    }


    addliElementToList(ulElement, liElement) {
        ulElement.appendChild(liElement);
        this.listofTasks.push(liElement);
    }

    //przenosimy zadanie do zrobinych, przekazujemy element DOM
    divideTasksToLists(liElement) {

        const ul = document.querySelector('.app__listDone');
        liElement.forEach((li, i) => {
            ul.appendChild(liElement[i]);
        })

    }

}