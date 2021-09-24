// 3) Crie uma classe de Funcionários com os atributos nome, salario hora, dias 
// trabalhados, total de faltas no ano. Crie os getters e setters. 
// Crie um método para calcular o salário bruto que será a multiplicação do salario 
// hora pelos dias trabalhados. 
// Crie um método para calcular a PLR. Se o numero de faltas for igual a zero a PLR 
// será igual ao salário bruto. Se o número de faltas for igual a 1 a PLR será 94% do 
// salário bruto. Se o número de faltas for igual a 2 a PLR será 92% do salário bruto. 
// Se o número de faltas for igual a 3 a PLR será 90% do salário bruto. se o número de 
// faltas for igual a 4 a PLR será 88% do salário bruto. Se o número de faltas for maior 
// ou igual a 5 a PLR será zero.
// Crie um método para calcular o desconto que será 5% do salário bruto.
// Crie um método para calcular o salário liquido. Salario bruto - desconto + PLR.
// Imprima as seguintes mensagens
// O funcionário de nome xx tem o salário bruto de 999, teve 99 falta(s) e sua PLR foi 
// de 999
// O funcionário de nome xx tem o salário bruto de 999, o desconto de 999,  a PLR de 
// 999 e o salário líquido de 9999


class Employee{
    private _name: string;
    private _salary: number;
    private _workflow: number;
    private _fault: number;

    constructor(name: string, salary: number, workflow: number, fault: number){
        this._name = name;
        this._salary = salary;
        this._workflow = workflow;
        this._fault = fault;
    }


    get name(){
        return this._name;
    }

    get salary(){
        return this._salary;
    }

    get workflow(){
        return this._workflow;
    }

    get fault(){
        return this._fault;
    }

    set name(name: string){
        if(name === ' '){
            throw new Error('Nome invalido')
        }
        this.name = name
    }

    set salary(salary: number){
        if(salary === 0){
            throw new Error('Salario Invalido')
        }
        this.salary = salary
    }

    set workflow(workflow: number){
        if(workflow === 0){
            throw new Error('A quantidade da dias trabalhados é  invalida')
        }
        this.workflow = workflow
    }


    plr(){
        if (this.fault === 0){
            return (this.salary * this.workflow) * 2
        } else if (this.fault === 1){
            return (this.salary * this.workflow) * 1.94
        } else if (this.fault === 2){
            return (this.salary * this.workflow) * 1.92
        } else if (this.fault === 3){
            return (this.salary * this.workflow) * 1.9
        } else if (this.fault === 4){
            return (this.salary * this.workflow)* 1.88
        } else {
            return  (this.salary * this.workflow)
        }
    }

    discount(){
        return (this.salary * this.workflow) * 0.05
    }

    netSalary(){
        return ((this.salary * this.workflow) - this.discount()) + this.plr()
    }


    messagePlr(){
        return `O funcionário ${this.name} tem o salário bruto de ${(this.salary * this.workflow)}, teve ${this.fault} faltas e sua PLR ${this.plr()}`
    }

    messageDiscount(){
        return `O funcionário ${this.name} tem o salário bruto de ${this.salary * this.workflow}, o desconto de ${this.discount()},  a PLR de ${this.plr()} e o salário líquido de ${this.netSalary()}`
    }

}


const employee = new Employee('Gabriel', 100, 200, 5)
console.log(employee)
console.log(employee.messagePlr())
console.log(employee.messageDiscount())
