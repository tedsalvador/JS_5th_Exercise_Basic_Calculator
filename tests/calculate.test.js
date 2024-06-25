import { describe, expect, it } from 'vitest';
import { calculate } from "/js/calculate.js";

describe('Test for Simple calculator', () => {
    
    it('should return the value for operator +', () => {
        //Aceptance Criteria
        // Given
        const value1 = 1;
        const value2 = 2;
        const operator = '+';
        //When - Action
        const result = calculate(value1, value2, operator)
        //Then
        console.log(result);
        expect(result).toBe("result will be 3")
    });

    it('should return the value for operator &', () => {
        //Aceptance Criteria
        // Given
        const value1 = 1;
        const value2 = 2;
        const operator = '&';
        //When - Action
        const result = calculate(value1, value2, operator)
        //Then
        console.log(result);
        expect(result).toBe("result will be unknown value")
    });

    it('should return the value for operator *', () => {
        //Aceptance Criteria
        // Given
        const value1 = 1;
        const value2 = 'K';
        const operator = '*';
        //When - Action
        const result = calculate(value1, value2, operator)
        //Then
        console.log(result);
        expect(result).toBe("result will be unknown value")
    });

});