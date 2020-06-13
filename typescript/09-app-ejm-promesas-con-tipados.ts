//  funcion auto invocada
(()=>{

    let punto: number =3;
   

    const encestar =(puntos:number):Promise<number> => {

        let marcadorActual = 0;
 
     

        let CONTROL = 24;
       
 
        
        return new Promise((resolve, reject) => {
         
            let control24= Math.floor(Math.random() * (30 - 1)) + 1;

            if(control24>=CONTROL) {
                reject('No se Pudo encestar porque , se consumio el tiempo');
            } else{
                CONTROL -= control24;
                resolve(CONTROL);

            }
            
        });

    }


    encestar(punto)
    .then(TiempodeEncesto=>console.log(`cesta de ${punto} puntos al seg ${TiempodeEncesto} `))
    .catch(console.warn);
  
})();
