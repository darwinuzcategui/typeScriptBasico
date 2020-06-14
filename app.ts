//  funcion auto invocada
(()=>{
       // interface
       interface Personje {
        nombre: string,
        edad: number
    }

    interface Heroes {
        nombre: string,
        artesMarciales:string[] 
    }

        // Uso de Let y Const
        let nombre:string = 'Ricardo Tapia';
        let edad:number = 23;
      
        const PERSONAJE:Personje = {
          nombre,
          edad
        };
      
      
        // Cree una interfaz que sirva para validar el siguiente objeto
        const  batman:Heroes = {
          nombre: 'Bruno Díaz',
          artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
        }
      
        // Convertir esta funcion a una funcion de flecha
        const  resultadoDoble=( a:number, b:number ):number=> (a + b) * 2;
        
      
        // Función con parametros obligatorios, opcionales y por defecto
        // donde NOMBRE = obligatorio
        //       PODER  = opcional
        //       ARMA   = por defecto = 'arco'
        function getAvenger( nombre: string,  poder?:string ,arma: string = 'arco'){
          let mensaje;
          if( poder ){
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
          }else{
            mensaje = nombre + ' tiene un ' + poder
          }
        };

        class Rectangulo{
            constructor(public base:number, public altura:number){}

            calculaArea():number{
                return this.base*this.altura;
            }
            calculaAreaFlecha = ():number => this.base*this.altura;
            
        }
   
})();
