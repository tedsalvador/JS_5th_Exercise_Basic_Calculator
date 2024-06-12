import { describe, expect, it } from 'vitest';
import { calculateAngle } from "/js/calculateAngle.js";

describe('Test for Thrid Angle of The triangle', () => {
    
    it('should return El Valor del Tercer Angulo es = 90', () => {
        //Aceptance Criteria
        // Given
        const angle1 = 30;
        const angle2 = 60;
        //When - Action
        const result = calculateAngle(angle1, angle2)
        //Then
        expect(result).toBe("El Valor del Tercer Angulo es = 90")
    });

    it('should return El Valor del Tercer Angulo es = 60', () => {
        //Aceptance Criteria
        // Given
        const angle1 = 60;
        const angle2 = 60;
        //When - Action
        const result = calculateAngle(angle1, angle2)
        //Then
        expect(result).toBe("El Valor del Tercer Angulo es = 60")
    });

    it('should return El Valor del Tercer Angulo es = 59', () => {
        //Aceptance Criteria
        // Given
        const angle1 = 43;
        const angle2 = 78;
        //When - Action
        const result = calculateAngle(angle1, angle2)
        //Then
        expect(result).toBe("El Valor del Tercer Angulo es = 59")
    });

    it('should return El Valor del Tercer Angulo es = 150', () => {
        //Aceptance Criteria
        // Given
        const angle1 = 10;
        const angle2 = 20;
        //When - Action
        const result = calculateAngle(angle1, angle2)
        //Then
        expect(result).toBe("El Valor del Tercer Angulo es = 150")
    });

});