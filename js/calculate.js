export function calculate(numberOne, numberTwo, varOperator) {
    let resultCalculated = 0;
    let mensaje = "";

    switch(varOperator) {
        case '+':
            resultCalculated = numberOne + numberTwo;
            mensaje=`result will be ${numberOne} + ${numberTwo} = ${resultCalculated}`;
            break;
    
        case '-':
            resultCalculated = numberOne - numberTwo;
            mensaje=`result will be ${numberOne} - ${numberTwo} = ${resultCalculated}`;
            break;
    
        case '*':
            resultCalculated = numberOne * numberTwo;
            mensaje=`result will be ${numberOne} * ${numberTwo} = ${resultCalculated}`;
            break;
    
        case '/':
            resultCalculated = numberOne / numberTwo;
            mensaje=`result will be ${numberOne} / ${numberTwo} = ${resultCalculated}`;
            break;
    
        default:
            console.log('Invalid operator');
            break;
    }
    mensaje = "result will be " + resultCalculated;
    return mensaje;
}