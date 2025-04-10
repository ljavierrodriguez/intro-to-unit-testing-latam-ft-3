function sumar(a, b){
    if(!(typeof a === 'number') || !(typeof b === 'number')) return "Los valores deben ser numericos"
    return a + b
}

function esMayorDeEdad(edad){
    if(edad >= 18) return true
    return false
}

module.exports = {
    sumar,
    esMayorDeEdad
}