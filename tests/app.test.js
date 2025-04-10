const { sumar, esMayorDeEdad } = require('../app')

describe('Validaciones de la funcion sumar', () => {

    test('La funcion sumar debe estar definida', () => {
        expect(sumar(1)).toBeDefined()
    })
    
    test('La funcion sumar debe recibir 2 argumentos', () => {
        expect(sumar.length).toBe(2)
    })
    
    test('El resultado de sumar 21 + 9 debe ser 30', () => {
        expect(sumar(21, 9)).toBe(30)
    })

    test('El resultado de sumar 15 + 15 debe ser 30', () => {
        expect(sumar(15, 15)).toBe(30)
    })

    test('El resultado de sumar 10 + 15 debe ser 25', () => {
        expect(sumar(10, 15)).toBe(25)
    })

    test('El resultado de sumar A + 15 debe ser "Los valores deben ser numericos"', () => {
        expect(sumar(15, "A")).toBe("Los valores deben ser numericos")
    })
})

describe('Validaciones de la funcion esMayorDeEdad', () => {
    test('Cualquier edad mayor o igual a 18 debe ser retornar true', () => {
        expect(esMayorDeEdad(18)).toBeTruthy()
    })
})