//  funcion auto invocada
(function(){

    function getEdad(){
        return 100+300+100
    }
    const nombre   = 'Darwin';
    const apellido = 'Uzcategui';
    const edad     = 47;

    // Resultado que se espera: Darwin Uzcategui (Edad: 47)
    // sin template literal seria asi
    const salidaSinTemplateLiteral = nombre+" "+ apellido+" (Edad: "+edad+")";
    console.log(salidaSinTemplateLiteral);  

    // template literal seria asi
    const salidaConTemplateLiteral = `${ nombre } ${ apellido } (Edad: ${ edad })`;
    console.log(salidaConTemplateLiteral);
    // Template con salto linea y funciones
    const salidaTemplateLiteralSaltoLinea = `${ nombre } \n${ apellido } \n(Edad: ${ edad })`;
    console.log(salidaTemplateLiteralSaltoLinea);
    let salidaTemplateLiteralSaltoFuncion = `
    ${ nombre }
    ${ apellido }
    (Edad: ${ edad+100 })`;
    console.log(salidaTemplateLiteralSaltoFuncion);
    salidaTemplateLiteralSaltoFuncion = `
    ${ nombre }
    ${ apellido }
    (Edad: ${ getEdad()})`;
    console.log(salidaTemplateLiteralSaltoFuncion);


   
 
})();
