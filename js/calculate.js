export function calculate(numberOne, numberTwo, varOperator) {
    let resultCalculated = "";
    let mensaje = "";

    switch(varOperator) {
        case '+':
            resultCalculated = numberOne + numberTwo;
            mensaje=`result will be ${resultCalculated}`;
            break;
    
        case '-':
            resultCalculated = numberOne - numberTwo;
            mensaje=`result will be ${resultCalculated}`;
            break;
    
        case '*':
            try{
            resultCalculated = numberOne * numberTwo;
            mensaje=`result will be ${resultCalculated}`;
            }
            catch {
                console.log("paso por el catch");
                mensaje='result will be unknown value'; // Si ocurrió un error, manéjalo
              }
            break;
        case '/':
            resultCalculated = numberOne / numberTwo;
            mensaje=`result will be ${resultCalculated}`;
            break;
    
        default:
            console.log('unknown value');
            mensaje='result will be unknown value';
            break;
    }
    // mensaje = "result will be " + resultCalculated;
    return mensaje;
}