//  funcion auto invocada
(function(){
    const miFuncion = function(a: string ) {

        return a.toUpperCase();

    }

    const miFuncionF =(a:string)=>{
        return a.toUpperCase();
    }

    // Si tiene solo que se va retornar
    // se puede hacer asi
    const miFuncionF1 =(a:string)=> a.toUpperCase();

    console.log(miFuncion('Funcion Normal'));
    console.log(miFuncionF1('Funcion Flecha'));


    const sumarN = function( a:number, b:number){
        return a + b;
    }

    const sumarF = (a:number, b:number)=> a + b;


    console.log(sumarN(5,5));
    console.log(sumarF(10,5));

     //nuevo Ejercicio
     const airJordan = {
        nombre: 'Michel',
        anoto() {

            setTimeout(()=> {

                console.log(`${ this.nombre } anoto!!!`);

            }, 1000);


        }
    }

    airJordan.anoto();


    

 
})();
