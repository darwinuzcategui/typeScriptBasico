//  funcion auto invocada

(function(){

    
    function saludar(nombre:string) {
        console.log('hola -->' + nombre);
    }
    
    
    const airJordan = {
        nombre: 'Michel'
    };
    
    saludar(airJordan.nombre);

})();

