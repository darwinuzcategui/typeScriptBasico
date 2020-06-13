//  funcion auto invocada
(()=>{

    class Jugador {

        
        constructor(
            public nombre: string,
            public posicion: string,
            public equipo?: string,
            public numero: number= 0,
            public titular: boolean=true) {}


    }

    const airJordan:Jugador = new Jugador('Michel Jordan','Alero');

    console.log(airJordan);

   

  
   
})();
