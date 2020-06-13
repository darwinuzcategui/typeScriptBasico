//  funcion auto invocada
(()=>{
    
    const air23 = {
        nombre:'Michel',
        apellido:'Jordan',
        numero:23
    }

    console.log(air23.nombre);
    console.log(air23.apellido);
    console.log(air23.numero);
    /* O lo puedo hacer como una funcion envio el parametro*/

   // const extraer= (air23: any) => {
      const extraer= ({ nombre, numero }: any ) => {
       
        //const { nombre, numero } = air23;
        console.log(nombre);
        console.log(numero);

    }
    extraer(air23);

    // destructuracion de arreglos
    //***************************************************** */
    console.log("************ ARREGLOS jugador[indice]..****************************");
    const jugadores: string[]=['Michel Jordan','Lebron James','Carl Herrera'];
    console.log(jugadores[0]);
    console.log(jugadores[1]);
    console.log(jugadores[2]);
    console.log("*****DESTRUCTURACION ARREGLOS [Michel23,lebron23,carl11]= jugadores************************************");
    const [Michel23,lebron23,carl11]= jugadores;
    console.log(Michel23);
    console.log(lebron23);
    console.log(carl11);
    console.log("*****DESTRUCTURACION ARREGLOS [,,carl]= jugadores************************************");
    const [,,carl]= jugadores;
    console.log(carl);

    // *******************como parametro de una funcion
    const extraerArrs= ([ michel23, ,carl11 ]: string[] ) => {
       
    
        console.log(michel23);
        console.log(carl11);

    }
    console.log("*****como parametro de ua funcion***************");
    extraerArrs(jugadores);

})();
