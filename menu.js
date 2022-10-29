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
        this.employees = [];
    }

    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
        } else {
            throw new Error(`You can only add an instance of Employee. Argument is not an employee:${employee}`);
        }
    }

    describe() {
        return `${this.firstName} is ${this.age}`;
    }

}

class Menu {
    constructor() {
        this.companies = [];
        this.selectedCompany = null;
    }

    start() {
        let selection = showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createcompany();
                    break;
                case '2':
                    this.viewCompany();
                    break;
                case '3':
                    this.deleteCompany();
                    break;
                case '4':
                    this.displayCompanies();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye');
    }

    showMainMenuOptions() {
        return prompt(`
         0)exit 
         1) create new company
         2) view company
         3) delete company
         4) display all companies
        `);
    }
    displayCompanies() {
        let companyString = '';
        for (let i = 0; i < this.companies.length; i++) {
            companyString += i + ') ' + this.companies[i].name + '\n';
        }
        alert(teamString);
    }
    createcompany() {
        let name = prompt('enter name for new company:');
        this.companies.push(new Company(name));
    }

    viewCompany() {
        let index = prompt('Enter the index of the company you want to view:');
        if (index > -1 && index < this.companies.length) {

        }
    }
}

