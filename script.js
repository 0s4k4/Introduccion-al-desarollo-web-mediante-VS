///habilitar modo stricto


'use strict'


///definimos un switcher que se toma del boton
const switcher  = document.querySelector('.btn');


///funcion, escucha cuando se haga un click en el btn que esta declara el switch del btn
//si se hace click, toma el light theme, y luego dark, con el toggle, modifica el class del body
switcher.addEventListener('click',function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');


    const className = document.body.classList;
    if(className == 'light-theme'){ ///si es igual a ligh se establace dark, si no light
        this.textContent = 'Dark';
    } else {
        this.textContent = "Light";
    }

    console.log("Current class name: "+ className );
    ///imprime el curren class name en la consola
});