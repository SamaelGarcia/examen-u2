/*a. Descripción: La página tablas.html contiene un formulario para generar la tabla de multiplicar de un
número.
b. Requisitos de funcionalidad:
i. Al hacer clic en el botón "Generar Tabla", el JavaScript debe:
1. Leer el número ingresado en el campo Número.
2. Leer el límite ingresado en el campo Límite.
3. Calcular la tabla de multiplicar del número desde 1 hasta el límite.
4. Mostrar el resultado en el área de texto Resultado de la tabla..., formateado de la
siguiente manera:
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
...
2 x límite = resultado
5. Validaciones: Asegúrese de que el usuario no deje ningún campo vacío, y que ambos
campos contengan números válidos antes de generar la tabla.*/

let formulario = document.getElementById('formulario');
let numero = document.getElementById('number');
let limite = document.getElementById('limit');
let resultado = document.getElementById('result');
let boton = document.getElementById('generar-tabla');
let errores = document.getElementById('Errores');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let errores = [];
    if (numero.value.trim() === '') {
        errores.push('El campo numerico no puede estar en blanco');
    }
    if (limite.value.trim() === '') {
        errores.push('Este espacio no puede ir vacio');
    }
    if (isNaN(numero.value) || isNaN(limite.value)) {
        errores.push('El campo numerico como el limite deben ser numeros');
    }
    if (errores.length > 0){
        errores.forEach(error => {
            errores.innerHTML += `<p>${error}</p>`;
            });
        }else{
            let tabla = '';
            for (let i = 1; i <= limite.value; i++) {
                tabla += `${numero.value} x ${i} = ${numero.value * i}<br>`;
                }
                resultado.innerHTML = tabla;
                }
                });

boton.addEventListener('click', (e) => {
    e.preventDefault();
    /*let errrores = [];
    if (numero.value.trim() === '') {
        errores.push('El campo numerico no puede estar en blanco');
    }
    if (limite.value.trim() === '') {
        errores.push('Este espacio no puede ir vacio');
    }
    if (isNaN(numero.value) || isNaN(limite.value)) {
        errores.push('El campo numerico como el limite deben ser numeros');
    }
    if (errores.length > 0){
        errores.forEach(error => {
            errores.innerHTML += `<p>${error}</p>`;
            });
            }else{
                let tabla = '';
                for (let i = 1; i <= limite.value; i++) {
                    tabla += `${numero.value} x ${i} = ${numero.value * i}<br>`;
                    }
                    resultado.innerHTML = tabla;
                    }*/
                    });


