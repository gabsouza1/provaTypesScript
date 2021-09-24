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


class ConvertUnit{
    static SECONDS: number = 60;
    static MINUTES: number = 60;
    static HOUR: number = 24;
    static DAY: number = 30;
    static MONTHS: number = 12;

    static convertMinutesToSeconds(time: number){
        return time * this.SECONDS
    }

    static convertHourToMinutes(time: number){
        return time * this.MINUTES
    }

    static convertDayToHour(time: number){
        return time * this.HOUR
    }

    static convertMonthToDay(time: number){
        return time * this.DAY
    }

    static convertYearToMonths(time: number){
        return time * this.MONTHS
    }
}

console.log('Segundos: '+ ConvertUnit.convertMinutesToSeconds(2))
console.log('Minutos: '+ ConvertUnit.convertHourToMinutes(3))
console.log('Horas: '+ ConvertUnit.convertDayToHour(2))
console.log('Dias: '+ ConvertUnit.convertMonthToDay(3))
console.log('Meses: '+ ConvertUnit.convertYearToMonths(3))


