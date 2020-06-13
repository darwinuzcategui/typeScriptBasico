//  funcion auto invocada
(()=>{
    console.log('inicio');

    const prom1= new Promise((resolve, reject) => {

        setTimeout(()=>{

            reject('se termino el timeout');

        },1000);

    });

  

prom1
.then( mensa=>console.log(mensa))
.catch(error=>console.warn(error));
    console.log('fin');
    
  
})();
