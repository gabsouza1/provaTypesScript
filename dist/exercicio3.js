"use strict";
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
var Employee = /** @class */ (function () {
    function Employee(name, salary, workflow, fault) {
        this._name = name;
        this._salary = salary;
        this._workflow = workflow;
        this._fault = fault;
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (name === ' ') {
                throw new Error('Nome invalido');
            }
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (salary) {
            if (salary === 0) {
                throw new Error('Salario Invalido');
            }
            this.salary = salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "workflow", {
        get: function () {
            return this._workflow;
        },
        set: function (workflow) {
            if (workflow === 0) {
                throw new Error('A quantidade da dias trabalhados é  invalida');
            }
            this.workflow = workflow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "fault", {
        get: function () {
            return this._fault;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.plr = function () {
        if (this.fault === 0) {
            return (this.salary * this.workflow) * 2;
        }
        else if (this.fault === 1) {
            return (this.salary * this.workflow) * 1.94;
        }
        else if (this.fault === 2) {
            return (this.salary * this.workflow) * 1.92;
        }
        else if (this.fault === 3) {
            return (this.salary * this.workflow) * 1.9;
        }
        else if (this.fault === 4) {
            return (this.salary * this.workflow) * 1.88;
        }
        else {
            return (this.salary * this.workflow);
        }
    };
    Employee.prototype.discount = function () {
        return (this.salary * this.workflow) * 0.05;
    };
    Employee.prototype.netSalary = function () {
        return ((this.salary * this.workflow) - this.discount()) + this.plr();
    };
    Employee.prototype.messagePlr = function () {
        return "O funcion\u00E1rio " + this.name + " tem o sal\u00E1rio bruto de " + (this.salary * this.workflow) + ", teve " + this.fault + " faltas e sua PLR " + this.plr();
    };
    Employee.prototype.messageDiscount = function () {
        return "O funcion\u00E1rio " + this.name + " tem o sal\u00E1rio bruto de " + this.salary * this.workflow + ", o desconto de " + this.discount() + ",  a PLR de " + this.plr() + " e o sal\u00E1rio l\u00EDquido de " + this.netSalary();
    };
    return Employee;
}());
var employee = new Employee('Gabriel', 100, 200, 5);
console.log(employee);
console.log(employee.messagePlr());
console.log(employee.messageDiscount());
