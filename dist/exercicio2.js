"use strict";
// 2) Escreva a classe ConversaoDeUnidadesDeTempo com métodos estáticos para 
// conversão 
//  das unidades de velocidade segundo a lista abaixo, por exemplo 
// converMinutoParaSegundo. O método deverá receber a quantidade de minutos e 
// retornar o valor em segundos.
// • 1 minuto = 60 segundos 
// • 1 hora = 60 minutos 
// • 1 dia = 24 horas 
// • 1 mês = 30 dias 
// • 1 ano = 365.25 dias
var ConvertUnit = /** @class */ (function () {
    function ConvertUnit() {
    }
    ConvertUnit.convertMinutesToSeconds = function (time) {
        return time * this.SECONDS;
    };
    ConvertUnit.convertHourToMinutes = function (time) {
        return time * this.MINUTES;
    };
    ConvertUnit.convertDayToHour = function (time) {
        return time * this.HOUR;
    };
    ConvertUnit.convertMonthToDay = function (time) {
        return time * this.DAY;
    };
    ConvertUnit.convertYearToMonths = function (time) {
        return time * this.MONTHS;
    };
    ConvertUnit.SECONDS = 60;
    ConvertUnit.MINUTES = 60;
    ConvertUnit.HOUR = 24;
    ConvertUnit.DAY = 30;
    ConvertUnit.MONTHS = 12;
    return ConvertUnit;
}());
console.log('Segundos: ' + ConvertUnit.convertMinutesToSeconds(2));
console.log('Minutos: ' + ConvertUnit.convertHourToMinutes(3));
console.log('Horas: ' + ConvertUnit.convertDayToHour(2));
console.log('Dias: ' + ConvertUnit.convertMonthToDay(3));
console.log('Meses: ' + ConvertUnit.convertYearToMonths(3));
