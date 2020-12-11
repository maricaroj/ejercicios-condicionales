                                            // EJERCICIO 1
// const puedeVerPelicula = (edad, tieneAutorizacion) => edad >= 15 || tieneAutorizacion === true;
// console.log(puedeVerPelicula(12, false)); // false
// console.log(puedeVerPelicula(12, true)); // true
// console.log(puedeVerPelicula(16, false)); // true
// console.log(puedeVerPelicula(18, true)); // true

                                            // EJERCICIO 2
// const estaEnRango = (valor, minimo, maximo) => valor >= minimo && valor <= maximo;
// console.log(estaEnRango(3, 1, 10)); // true
// console.log(estaEnRango(1, 1, 10)); // true
// console.log(estaEnRango(10, 1, 10)); // true
// console.log(estaEnRango(12, 1, 10)); // false
// console.log(estaEnRango(-3, 1, 10)); // false

                                            // EJERCICIO 3
// const puedeAvanzar = (string) => {
//     if(string === 'verde'){
//         return true;
//     } else if(string === 'amarillo' || string === 'rojo'){
//         return false
//     } else if(string !== 'verde' || string !== 'amarillo' || string !== 'rojo'){
//         return 'Error: color de semáforo inválido';
//     };
// };
// console.log(puedeAvanzar('verde'));
// console.log(puedeAvanzar('amarillo'));
// console.log(puedeAvanzar('rojo'));
// console.log(puedeAvanzar('lila'));

                                            // EJERCICIO 4
// const vocales = /[aeiou]/i;
// const esVocal = (letra) => vocales.test(letra);
// console.log(esVocal('a')); // true
// console.log(esVocal('n')); // false
// console.log(esVocal('e')); // true
// console.log(esVocal('i')); // true
// console.log(esVocal('o')); // true
// console.log(esVocal('l')); // false
// console.log(esVocal('u')); // true

                                            // EJERCICIO 5
// solucion 1
// const vocales = /[aeiou0-9]/i
// const esConsonante = (letra) => !vocales.test(letra);

// solucion 2
// const esConsonante = (letra) => !(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u');

// console.log(esConsonante('e')); // false
// console.log(esConsonante('n')); // true

                                            // EJERCICIO 6
// const esHoraValida = (hora) => {
//     const tiempo = hora.split(':');
//     if(tiempo[0] >= 00 && tiempo[0] <= 12 && tiempo[1] >= 00 && tiempo[1] <= 59){
//         return true;
//     } else {
//         return false
//     };
// };
// console.log(esHoraValida('12:23')); // true
// console.log(esHoraValida('12:65')); // false
// console.log(esHoraValida('28:05')); // false
// console.log(esHoraValida('00:00')); // true

                                            // EJERCICIO 7
// const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => pasoTests === true && tieneMultasImpagas === true && pagoImpuestos === true;
// console.log(puedeRenovarCarnet(true, true, true));
// console.log(puedeRenovarCarnet(true, true, false));
// console.log(puedeRenovarCarnet(true, false, true));
// console.log(puedeRenovarCarnet(true, false, false));
// console.log(puedeRenovarCarnet(false, true, true));
// console.log(puedeRenovarCarnet(false, true, false));
// console.log(puedeRenovarCarnet(false, false, true));
// console.log(puedeRenovarCarnet(false, false, false));

                                            // EJERCICIO 8
// const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada === true;
// console.log(puedeGraduarse(80, 50, true));
// console.log(puedeGraduarse(80, 50, false));
// console.log(puedeGraduarse(80, 45, true));
// console.log(puedeGraduarse(80, 45, false));
// console.log(puedeGraduarse(65, 50, true));
// console.log(puedeGraduarse(33, 55, false));
// console.log(puedeGraduarse(42, 45, true));
// console.log(puedeGraduarse(28, 45, false));

                                            // EJERCICIO 9
// const esParOImpar = (numero) => {
//     if(numero % 2 === 0){
//         return 'par';
//     } else {
//         return 'impar';
//     };
// };
// console.log(esParOImpar(3));
// console.log(esParOImpar(10));

                                            // EJERCICIO 10
// const esPositivoONegativo = (numero) => {
//     if(numero >= 0) {
//         return 'positivo';
//     } else {
//         return 'negativo';
//     };
// };
// console.log(esPositivoONegativo(3));
// console.log(esPositivoONegativo(-5));

                                            // EJERCICIO 11
// const avanzarSemaforo = (colorActual) => {
//     if(colorActual === 'verde') {
//         return 'amarillo';
//     } else if(colorActual === 'amarillo') {
//         return 'rojo';
//     } else if(colorActual === 'rojo') {
//         return 'verde';
//     };
// };
// console.log(avanzarSemaforo('verde'));
// console.log(avanzarSemaforo('amarillo'));
// console.log(avanzarSemaforo('rojo'));

                                            // EJERCICIO 12
// const obtenerDiasMes = (mes) => {
//     if(mes === 'enero' || mes === 'marzo' || mes === 'mayo' || mes === 'julio' ||mes === 'agosto' ||mes === 'octubre' ||mes === 'diciembre') {
//         return 31;
//     } else if(mes === 'abril' || mes === 'junio' || mes === 'septiembre' || mes === 'noviembre') {
//         return 30;
//     } else if(mes === 'febrero') {
//         return 29;
//     };
// };
// console.log(obtenerDiasMes('diciembre'));
// console.log(obtenerDiasMes('febrero'));

                                            // EJERCICIO 13
// const obtnerGeneracion = (añoNacimiento) => {
//     if(añoNacimiento >= 1949 && añoNacimiento <= 1968) {
//         return 'Baby Boomer';
//     } else if(añoNacimiento >=1969 && añoNacimiento <= 1980) {
//         return 'Generación X';
//     } else if(añoNacimiento >= 1981 && añoNacimiento <= 1993) {
//         return 'Millennials';
//     } else if(añoNacimiento >= 1994 && añoNacimiento <= 2010) {
//         return 'Generación Z';
//     };
// };
// console.log(obtnerGeneracion(1949));
// console.log(obtnerGeneracion(1975));
// console.log(obtnerGeneracion(1986));
// console.log(obtnerGeneracion(1988));
// console.log(obtnerGeneracion(1999));

                                            // EJERCICIO 14
// const obtenerSensacion = (temperatura) => {
//     if(temperatura < 0) {
//         return '¡Está helando!';
//     } else if(temperatura >= 0 && temperatura < 15) {
//         return '¡Hace Frío!';
//     } else if(temperatura >= 15 && temperatura < 25) {
//         return 'Está lindo';
//     } else if(temperatura >= 25 && temperatura < 30) {
//         return 'Hace calor';
//     } else if(temperatura >= 30) {
//         return '¡Hace mucho calor!';
//     };
// };
// console.log(obtenerSensacion(-2));
// console.log(obtenerSensacion(10));
// console.log(obtenerSensacion(23));
// console.log(obtenerSensacion(29));
// console.log(obtenerSensacion(33));

                                            // EJERCICIO 15
// const obtnerNota = (puntaje) => {
//     const nota = Math.round(puntaje);
//     if(nota < 6) {
//         return 'Desaprobado';
//     } else if(nota >= 6 && nota < 7) {
//         return 'Regular';
//     } else if(nota >= 7 && nota < 8) {
//         return 'Bueno';
//     } else if(nota >= 8 && nota < 10) {
//         return 'Muy Bueno';
//     } else if (nota === 10) {
//         return 'Excelente';
//     } else if (nota < 0 || nota > 10) {
//         return 'Puntaje Inválido';
//     };
// };
// console.log(obtnerNota(7));
// console.log(obtnerNota(9.6));
// console.log(obtnerNota(12));

                                            // EJERCICIO 16
// const jugarPiedraPapelTijera = (a, b) => {
//     if ((a === 'piedra' || a === 'papel' || a === 'tijera') && (b === 'piedra' || b === 'papel' || b === 'tijera')){
//         if(a === 'piedra' && b === 'tijera' || a === 'tijera' && b === 'piedra') {
//             return '¡Ganó piedra!';
//         } else if(a === 'piedra' && b === 'papel' || a === 'papel' && b === 'piedra') {
//             return '¡Ganó papel!';
//         } else if(a === 'papel' && b === 'tijera' || a === 'tijera' && b === 'papel') {
//             return '¡Ganó tijera!';
//         } else {
//             return '¡Empate!';
//         }
//     } else {
//         return '¡Error!'
//     };
// };
// console.log(jugarPiedraPapelTijera('tijera', 'piedra'));  // ¡Ganó piedra!
// console.log(jugarPiedraPapelTijera('piedra', 'tijera'));  // ¡Ganó piedra!
// console.log(jugarPiedraPapelTijera('papel', 'piedra'));   // ¡Ganó papel!
// console.log(jugarPiedraPapelTijera('piedra', 'papel'));   // ¡Ganó papel!
// console.log(jugarPiedraPapelTijera('papel', 'tijera'));   // ¡Ganó tijera!
// console.log(jugarPiedraPapelTijera('tijera', 'papel'));   // ¡Ganó tijera!
// console.log(jugarPiedraPapelTijera('piedra', 'piedra'));  // ¡Empate!
// console.log(jugarPiedraPapelTijera('papel', 'papel'));    // ¡Empate!
// console.log(jugarPiedraPapelTijera('tijera', 'tijera'));  // ¡Empate!
// console.log(jugarPiedraPapelTijera('tijera', 'roca'));  // ¡Error!