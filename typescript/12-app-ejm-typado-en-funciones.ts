//  funcion auto invocada
(()=>{

    const sumar = (a: number,b:number):number=>{
        return a+b;
    }

    const sumar1 = (a: number,b:number):number=> a+b;

    const nombre =():string =>'Hola Darwin Felipe';

    const obtenerSaludo =():Promise<string>=>{
        return new Promise((resolve, reject) => {
            resolve('Darwin')
            
        });
    }

    obtenerSaludo().then(a=>console.log(a.toUpperCase()))
    

   
})();
