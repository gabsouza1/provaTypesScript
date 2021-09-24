"use strict";
// 1) Crie uma classe com os atributos produto, preço, quantidade), Crie os métodos 
// getters e setters. Crie validação para não aceitar nome em branco, preco e 
// quantidade com valor 0 (zero).  Considerando quesão oferecidos descontos pelo 
// número de quantidade comprada,  seguindo a tabela abaixo:
// a. Até 10 unidades: não tem desconto 
// b. de 11 a 20 unidades: 10% de desconto 
// c. de 21 a  50 unidades: 20% de desconto 
// d. acima  de 50 unidades: 25% de desconto
// Imprima a seguinte mensagem: O produto xxx de preço 999, quantidade comprada 
// de 999 teve o desconto de 999 e o valor pago foi de 99999
var Business = /** @class */ (function () {
    function Business(product, price, amount) {
        this._product = product;
        this._price = price;
        this._amount = amount;
    }
    Object.defineProperty(Business.prototype, "product", {
        get: function () {
            return this._product;
        },
        set: function (product) {
            if (product === ' ') {
                throw new Error('Produto invalido');
            }
            this._product = product;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Business.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            if (price === 0) {
                throw new Error('Preco invalido');
            }
            this._price = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Business.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (amount) {
            if (amount === 0) {
                throw new Error('Quantidade invalida');
            }
            this._amount = amount;
        },
        enumerable: false,
        configurable: true
    });
    Business.prototype.discount = function () {
        if (this.amount <= 10) {
            return "O produto " + this.product + " com valor referente a " + this.price + ", foram compradas " + this.amount + ", \nn\u00E3o recebeu nenhum desconto. O valor pago foi de " + this.price * this.amount + " reais";
        }
        else if (this.amount > 10 && this.amount <= 20) {
            return "O produto " + this.product + " com valor referente a " + this.price + ", foram compradas " + this.amount + " unidades, \nrecebendo um total de 10%. O valor pago foi de " + (this.price - (this.price * 0.1)) * this.amount + " reais";
        }
        else if (this.amount > 20 && this.amount <= 50) {
            return "O produto " + this.product + " com valor referente a " + this.price + ", foram compradas " + this.amount + " unidades, \nrecebendo um total de 20%. O valor pago foi de " + ((this.price - (this.price * 0.2)) * this.amount - this.price) + " reais";
        }
        else {
            return "O produto " + this.product + " com valor referente a " + this.price + ", foram compradas " + this.amount + " unidades,\nrecebendo um total de 25% de desconto. O valor pago foi de " + (this.price - (this.price * 0.25)) * this.amount + " reais";
        }
    };
    return Business;
}());
var business = new Business('Livros', 100, 20);
console.log(business);
console.log(business.discount());
// try{
//     business.product = 'Pedra'
//     business.price = 20
//     business.amount = 20
//     console.log(business)
//     console.log(business.discount())
// } catch (e: any){
//     console.log(e.message)
// }
