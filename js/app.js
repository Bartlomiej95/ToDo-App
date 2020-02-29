import {
    Task
} from './Task.js';
import {
    ListofTasks
} from './ListofTasks.js';

export class App {

    constructor() {
        this.task = new Task();
        this.list = new ListofTasks();
        this.toDoListArray = [];
        this.btnAdd = document.querySelector('.app__firstPart--btnAdd');
        this.btnAdd.addEventListener('click', this.startApp.bind(this));
        this.contentTask = document.getElementById('contentTask');
        this.appList = document.querySelector('.app__list');
        this.appDoneList = document.querySelector('.app__listDone');

        document.querySelectorAll('.app__list--btnRemove').forEach(item => {
            item.addEventListener('click', this.removeTask)
        })

        document.querySelectorAll('.app__list--btnDone').forEach(item => {
            item.addEventListener('click', this.doneTask);
        })
    }


    startApp() {
        // Funkcje uruchamiamy po naciśnięciu przycisku dodaj zadanie
        // Chcemy instancji obiektu Task (reprezentant naszego zadania) zmienic kontent na to co wpisze użytkownik

        if (this.contentTask.value === "") return; //sprawdzenie czy użytkownik cokolwiek wpisał


        // Wcześniej jednak stworzymy li - tam bedziemy "Wrzucac naszego taska"
        const li = document.createElement('li');
        const liElement = this.appList.appendChild(li);
        this.task.addingContentTask(this.contentTask.value, liElement, this.task);

        // Do li dodajemy przyciski 
        this.task.addBtnDone(li);
        this.task.addBtnRemove(li);

        // Po dodaniu nowego zadania musimy zaktualizowac tablicę 

        this.list.addliElementToList(this.appList, liElement);

        //Obsłuużenie przycisku usuwania
        document.querySelectorAll('.app__list--btnRemove').forEach(item => {
            item.addEventListener('click', this.task.removeTask)
        });

        // -||- dodawania do zrobionych
        document.querySelectorAll('.app__list--btnDone').forEach(item => {
            item.addEventListener('click', () => {
                const auxiliaryVariable = item.parentNode.textContent.slice(0, item.parentNode.textContent.length - 1);
                const liClick = this.list.listofTasks.filter(obj => (obj.textContent.slice(0, obj.textContent.length - 1) === auxiliaryVariable));

                this.task.changeStatusTask(this.task);
                this.list.divideTasksToLists(liClick)
            })

        })
        this.contentTask.value = '';
    }
}

// const app = new App();