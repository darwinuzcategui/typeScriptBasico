//  funcion auto invocada
(function(){

    //parametros de tipos oblifatorios en las funciones
    function encestar( quien  :string,
                       minuto?:string,
                       cuanto :string ='dos puntos')
                       {

        if(minuto){
            console.log(`${quien} encesto ${cuanto} en el ${minuto}. `);

        }else{

            console.log(`${quien} encesto ${cuanto} `);

        }
        
       
    }
   
    encestar('Michel Jordan','minuto 2 1er tiempo');
    encestar('Michel Jordan');
    encestar('Michel Jordan','minuto 4 1er tiempo','tres puntos');
})();
