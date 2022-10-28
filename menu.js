class Employee {
    constructor(firstName, lastName, position, age, company) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.postion = position;
        this.age = age;
    }
    describe() {
        return `${this.firstName} is a ${this.position} `;
    }
}

class Company {
    constructor(name) {
        this.name = name;
        this.restaurant = [];
    }

    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.restaurant.push(employee);
        }else {
            throw new Error(`You can only add an instance of Employee. Argument is not an employee:${player}`);
        }
    }
}

