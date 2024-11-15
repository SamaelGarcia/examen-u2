/*Lista de Tareas (lista-tareas.html y lista-tareas.js)
a. Descripción: La página lista-tareas.html permite al usuario agregar tareas a una lista de pendientes.
b. Requisitos de funcionalidad:
i. Al hacer clic en el botón "Agregar", el JavaScript debe:
1. Leer el valor ingresado en el campo Nueva tarea.
2. Crear un nuevo elemento de lista (<li>) con el texto de la tarea ingresada.
3. Agregar este nuevo elemento al final de la lista de tareas (ul con id "taskList").
ii. Validaciones: Evita agregar tareas vacías.
c. Ejemplo de uso: Si el usuario ingresa "Estudiar para el examen" en el campo de texto y hace clic en
"Agregar", la lista de tareas debería mostrar un nuevo elemento de lista con el texto "Estudiar para el
examen".*/


const listaTareas = document.getElementById('taskList');
const inputTarea = document.getElementById('newTask');
const agregarTarea = document.getElementById('addTask');
const tarea = document.getElementById('tarea');
const tareaList = document.getElementById('taskList');
const tareaList2 = document.getElementById('taskLis2');


