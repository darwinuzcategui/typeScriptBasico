//  funcion auto invocada
(()=>{

      // interface es una clase que son las reglas es un tipo de datos
      interface Jugador {
        nombre:string,
        numero:number,
        posicion?:string // con el ? la propiedad es opcional

    }
    const jugarBaloncesto = ( jugador: Jugador)=>{
        console.log(`Entro a jugar ${jugador.nombre}  Baloncesto`);
    }

    const salirdelJuego = ( jugador: Jugador)=>{
        console.log(`Salio del juego ${jugador.nombre}  Baloncesto`);
    }

    const airJordan:Jugador = {
        nombre:'Michel Jordan',
        numero:23,
        posicion:'Alero'
    
    }

    const carlHerrera11:Jugador = {
        nombre:'Carl Alen Herrera',
        numero:11
    }

    jugarBaloncesto(airJordan);
    salirdelJuego(carlHerrera11);


   
})();
