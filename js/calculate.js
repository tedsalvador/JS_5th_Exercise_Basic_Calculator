export function calculate(numberOne, numberTwo, varOperator) {
    let resultCalculated = "unknown value";
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
         if (isNaN(numberOne) || isNaN(numberTwo)){
            mensaje=`result will be unknown value`; 
         } else {
            resultCalculated = numberOne * numberTwo;
            mensaje=`result will be ${resultCalculated}`;  
         }          
            break;
        case '/':
            resultCalculated = numberOne / numberTwo;
            mensaje=`result will be ${resultCalculated}`;
            break;
    
        default:
            mensaje='result will be unknown value';
            break;
    }
    // mensaje = "result will be " + resultCalculated;
    return mensaje;
}