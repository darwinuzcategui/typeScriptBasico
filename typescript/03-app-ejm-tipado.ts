//  funcion auto invocada
(function(){
    let  mensaje: string = 'hola';
    let numero: number = 123
    let booleano:boolean = true; // false
    let hoy: Date = new Date();

   // mensaje ='123';
   // numero = 123

   // let cualquiercosa: string | number | Date ;
   let cualquiercosa;
   cualquiercosa = mensaje;
   cualquiercosa = numero;
   cualquiercosa = booleano;
   cualquiercosa = hoy;

   let airJordan = {
       nombre:'Michel',
       numero: 23
   }

   airJordan = {
       nombre: 'Jordan',
       numero:45,
      
   };
   

})();
