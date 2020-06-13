//  funcion auto invocada
(()=>{

    class Jugador {

        nombre: string ;
        posicion:string;
        equipo:string;
        numero:number;
        titular:boolean;

        constructor(
            nombre: string,
            posicion:string,
            equipo:string,
            numero:number,
            titular:boolean,

        ) {
             this.nombre   = nombre;
             this.posicion = posicion;
             this.equipo = equipo;
             this.numero = numero;
             this.titular= titular;

        }


    }

    const airJordan:Jugador = new Jugador('Michel Jordan','Alero','Chigao Bulls',23,true);

    console.log(airJordan);

   

  
   
})();
