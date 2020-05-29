function nextSlide() {
    // Obtenemos todos los items de nuestro slider y los metemos en la variable itemsSlider
    // Es importante saber que document.getElementsByClassName() siempre nos devolverá un arreglo
    var itemsSlider = document.getElementsByClassName('slider-item')

    // Por defecto marcamos el primer item del array como activo, después cambiaremos este valor
    var activeItem = itemsSlider[0]
    // Por defecto marcamos el segundo item del array como siguiente, después cambiaremos este valor
    var nextItem = itemsSlider[1]
    // Calculamos la longitud de nuestros array de items
    var lengthItemsSlider = itemsSlider.length
    // Si el slide tiene menos de 2 imágenes mostramos un error en consola del navegador
    if(lengthItemsSlider < 2) {
        console.error('El slider debe tener al menos 2 imágenes para un correcto funcionamiento')
    }
    // Con la ayuda de un for recorremos todos los valores de nuestro arreglo
    // En cada iteración de nuestro for cambiará el valor de index, empezará en cero e irá aumentando en uno
    // cuando ya no se cumpla la condición que indicamos: index < lengthItemsSlider
    for(var index = 0; index < lengthItemsSlider; index++) {
        // Metemos en la variable currentItem el item con el indice 'index' (hay que recordar que este valor cambia en cada iteración)
        var currentItem = itemsSlider[index]
        // Validamos que currentItem tenga la clase 'active', si la tiene se ejecuta el código dentro del if
        // en caso de que no tenga la clase nada se va a ejecutar y continuará con la siguiente iteración
        if(currentItem.classList.contains('active')) {
            // Al haber cumplido la condición anterior solo guardamos el item que tiene la clase active en la variable activeItem
            activeItem = currentItem

            // El siguiente item será el que podemos obtener con el siguiente índice, por ejememplo:
            // si el item activo es el que se encuentra en el indice 0 de nuestro array, el siguiente item será el que
            // se encuentre en el índice 1
            // Tenemos un caso donde lo anterior podría fallar:
            // si la longitud de mi slider es de 3 elementos, los índices serían 0, 1 y 2, en el caso de que el item activo fuera el
            // del índice 2, no podemos decir que el siguiente es el del índice 3 porque no tenemos un elemento en el índice 3 y esto nos
            // daría un error, lo mejor es que al llegar al último item nos saltemos nuevamente al primero que es el que está en el índice 0
            // resolvemos el problema mencionado anteriormente con la siguiente condición

            // si el índice es < a la longitud de nuetro slider - 1, el siguiente item será el que esté en el siguiente índice
            // restamos uno a la longitud por lo siguiente:
            // imaginemos un array de 3 elementos, la longitud de mi array es 3, pero los índices son 0, 1, y 2, podemos notar 
            // que no llegamos al índice 3, sino al 3 - 1 que es lo mismo que la longitud de mi array - 1
            if(index < lengthItemsSlider - 1 ) {
                nextItem = itemsSlider[index + 1]
            }
            // En el caso de que no se cumpla la condición anterior el siguiente item será el que se encuentra en
            // el índice 0(el primer elemento)
            else {
                nextItem = itemsSlider[0]
            }
        }
    }
    // al item activo actualmente le quito la clase active
    activeItem.classList.remove('active')
    // al siguiente item le agrego la clase active
    nextItem.classList.add('active')
}
//ejercicio slide en reversa 
function prevSlide()
{
    //obtenemos los elementos en un array especificando la clase
    var itemsSlider = document.getElementsByClassName('slider-item')
    //se declaran e inicializan variables 
    //guarda el elemento que tiene la clase active   
    var activeItem = itemsSlider[0]
    //guarda el siguiente elemento que se va a activar 
    var nextItem = itemsSlider[1]
    //guarda el numero de elementos que tiene itemSlider
    var lengthItemsSlider = itemsSlider.length

    // si solo existe un elemento arrojara un error
    if(lengthItemsSlider < 2) {
        console.error('El slider debe tener al menos 2 imágenes para un correcto funcionamiento')
    }
    //ciclo a la inversa: 
    //se inicia el numero de elementos del arrego menos uno
    //si el indicador es mayor o igual a 0 
    //se resta uno al indicador
    for(var index = lengthItemsSlider - 1; index >= 0; index--) {
    
        //variable local: guarda el item que se esta revisando 
        var currentItem = itemsSlider[index]

        //si el elemento contiene la clase active
        if(currentItem.classList.contains('active')) {
            
            //se guarda elemento
            activeItem = currentItem

            //y si es el primer item
            if(index == 0 ) {
                //el siguente item va ser el ULTIMO elemento del arreglo
                nextItem = itemsSlider[lengthItemsSlider - 1]
            }
            //si no el siguiente item sera el anterior 
            else {
                nextItem = itemsSlider[index - 1]
            }
        }
    }
    //al item actual se le quita la clase active
    activeItem.classList.remove('active')
   // al siguiente item se le anade la clase active
    nextItem.classList.add('active')



}


// classList
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList