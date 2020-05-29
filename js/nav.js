function showItem(id) {
    var items = document.getElementsByClassName('item-nav')
    var itemToShow = document.getElementById(id)
    for(var i = 0; i < items.length; i++ ){
        items[i].classList.remove('active')
    }
    itemToShow.classList.add('active')
}

// Ejercicio
// comentar cada línea de la función indicando que es lo que se hace