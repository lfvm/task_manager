//Obtener informacion de fechas 
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');



//Obtener informacion del task container
const taskContainer = document.getElementById('tasksContainer');


const setDate = () => {

    //Funcion que obtiene la fecha y actualiza los valores en el documento de html
    //para mostrar la fecha
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es' ,{ day: 'numeric'});
    dateText.textContent = date.toLocaleString('es'   ,{ weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('es'  ,{ month: 'short'});
    dateYear.textContent = date.toLocaleString('es'   ,{ year: 'numeric'});

}


const addNewTask = event => {

    //Prevenir que se genere la funcion por defecto al mandar un form
    event.preventDefault();
    //Obtener el valor del form
    const {value} = event.target.taskText;
    //Si el valor esta vacio no regresar nada
    if ( !value ) return;

    //Crear un div donde se guardara el nuvo task
    const task = document.createElement('div');
    //Agregar las clases correspondientes a dicho div
    task.classList.add('task', 'roundBorder');
    //Agregar un onclick listener
    task.addEventListener('click' ,changeTaskState);
    //Establecer el valor del div con el texto que ingreso el usuario
    task.textContent = value;   

    //Agregar dicho div al contenedor de tasks
    taskContainer.prepend(task);

    //Poner el form en blanco
    event.target.reset();

}


const changeTaskState = event => {

    //Agregar la clase donde al div del task, o quitarla si ya la tiene
    event.target.classList.toggle('done');
}


const order = () => {

    /*
    Funcion que revisa todos los elementos del taskContainer para ver si ya fueron realizados
    o aun no, y meter el elemento en su lista correspondiente
    */

    const done = [];
    const toDo = [];
    taskContainer.childNodes.forEach( el =>{
        el.classList.contains('done') ? done.push(el) : toDo.push(el);
    });

    //Regresa arreglo con las cosas por hacer al principio
    //y las terminadas al final
    return [...toDo, ...done];    

}

const renderOrderedTasks = () => {

    order().forEach( el => taskContainer.appendChild(el));


}


setDate();