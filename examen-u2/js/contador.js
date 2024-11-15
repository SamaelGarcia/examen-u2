/*Contador (contador.html y contador.js)
a. Descripción: La página contador.html muestra un contador simple con dos botones para aumentar y
disminuir el valor.
b. Requisitos de funcionalidad:
i. El valor del contador, que empieza en 0, debe mostrarse en el elemento div con el id "counter".
ii. Al hacer clic en el botón "Aumentar", el contador debe incrementar en 1 y actualizar el valor
mostrado en pantalla.
iii. Al hacer clic en el botón "Disminuir", el contador debe decrementar en 1 y actualizar el valor en
pantalla.
iv. Nota: El contador puede tener valores negativos.*/

const contador = document.getElementById('counter');
let valor = 0;
const aumentar = document.getElementByIdz('aumentar');
const disminuir = document.getElementByIdz('disminuir');
aumentar.addEventListener('click', () => {
    valor++;
    contador.textContent = valor;
    });
disminuir.addEventListener('click', () => {
    valor--;
    contador.textContent = valor;
    });</code>
   



    
