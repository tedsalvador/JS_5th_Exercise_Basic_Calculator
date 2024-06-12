import PromptSync from "prompt-sync";

export function enterValues (){
    let anadir_numero = "";
    let pri_NumbOK=0;
    let seg_NumbOK=0;
    let operator="";
    let salir_validacion;
    let arrayAngle = [];
    const prompt = PromptSync();
    //let text = "Is this all there is?";
    let pattern = /[*/+-]/;
    //let result = pattern.test(text);

    console.warn ("First Introduce 2 numbers to calculate after a Operator [+ or - or / or *] ");
    console.warn ("========================================================================== ");
    for (let index = 1; index < 3; index++) {
        salir_validacion = "NOK";        
        do{     
            anadir_numero = Number(prompt("El numero " + index + " es = "));
            if (isNaN(anadir_numero)) 
                {
                console.error("NO TEXTO - Ingrese solo numeros");
                } else 
                     {
                      if (Number(anadir_numero) == false)
                         {
                          console.info("Ingrese solo numeros");
                         } else 
                                {
                                 salir_validacion = "OK";
                                 if (index==1){
                                     pri_NumbOK = anadir_numero;
                                     } else {
                                            seg_NumbOK = anadir_numero;
                                            }    
                                }      
                     }
          }while(salir_validacion != "OK") 
    }
    console.info("Los dos valores Ingresados son: " + pri_NumbOK + " y " + seg_NumbOK);
    // arrayAngle.push(pri_NumbOK);

    console.info("Now Enter operator ( either +, -, * or / ): ");
    salir_validacion = "NOK";  
    do{     
        operator = prompt("Operator ? ");
    //    if (pattern.test(operator) == false || operator.length == 0 || operator.length > 1) 
    if ((pattern.test(operator) === false)|| operator.length > 1)       
     {
            console.error("Ingrese solo OPERADORES permitidos !!");
            } else 
                 {
                   salir_validacion = "OK";
                  }      
       }while(salir_validacion != "OK") 

    return [pri_NumbOK, seg_NumbOK, operator];
    }