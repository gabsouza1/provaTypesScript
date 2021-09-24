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


class Business {
    public _product: string;
    public _price: number;
    public _amount: number;

    constructor(product: string, price: number, amount: number){
        this._product = product;
        this._price = price;
        this._amount = amount;
    }

    get product(){
        return this._product;
    }

    get price(){
        return this._price;
    }

    get amount(){
        return this._amount;
    }


    set product(product: string){
        if(product === ' '){
            throw new Error('Produto invalido')
        }
        this._product = product;
    }

    set price(price: number){
        if(price === 0){
            throw new Error('Preco invalido')
        }
        this._price = price;
    }

    set amount(amount: number){
        if(amount === 0){
            throw new Error('Quantidade invalida')
        }
        this._amount = amount;
    }

    discount(){
        if(this.amount <= 10){
            return `O produto ${this.product} com valor referente a ${this.price}, foram compradas ${this.amount}, 
não recebeu nenhum desconto. O valor pago foi de ${this.price * this.amount} reais`
        } else if (this.amount > 10 && this.amount <= 20){
            return `O produto ${this.product} com valor referente a ${this.price}, foram compradas ${this.amount} unidades, 
recebendo um total de 10%. O valor pago foi de ${(this.price - (this.price * 0.1)) * this.amount } reais`
        } else if (this.amount > 20 && this.amount <= 50){
            return `O produto ${this.product} com valor referente a ${this.price}, foram compradas ${this.amount} unidades, 
recebendo um total de 20%. O valor pago foi de ${(this.price - (this.price * 0.2)) * this.amount - this.price} reais`
        } else {
            return `O produto ${this.product} com valor referente a ${this.price}, foram compradas ${this.amount} unidades,
recebendo um total de 25% de desconto. O valor pago foi de ${(this.price - (this.price * 0.25)) * this.amount} reais`
    }
}

}


const business = new Business('Livros', 100, 20)
console.log(business)
console.log(business.discount())
// try{
//     business.product = 'Pedra'
//     business.price = 20
//     business.amount = 20
//     console.log(business)
//     console.log(business.discount())
// } catch (e: any){
//     console.log(e.message)
// }