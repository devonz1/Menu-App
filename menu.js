class Employee {
    constructor(name, position, age) {
        this.name = name;
        this.position = position;
        this.age = age;
    }
    describe() {
        return `${this.firstName} is a ${this.position}. `;
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
            throw new Error(`You can only add an instance of Employee. Argument is not an employee:${employee}`
            );
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
        let selection = this.showMainMenuOptions();
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

    showCompanyMenuOptions(companyInfo) {
        return prompt(`
         0) back
         1) create employee
         2) delete employee
         ------------------------
         ${companyInfo}

        `);
    }


    displayCompanies() {
        let companyString = '';
        for (let i = 0; i < this.companies.length; i++) {
            companyString += i + ') ' + this.companies[i].name + '\n';
        }

        alert(companyString);
    }


    createcompany() {
        let name = prompt('enter name for new company:');
        this.companies.push(new Company(name));
    }


    viewCompany() {
        let index = prompt('Enter the index of the company you want to view:');
        if (index > -1 && index < this.companies.length) {
            this.selectedCompany = this.companies[index];
            let description = 'Company name : ' + this.selectedCompany.name + '\n';

            for (let i = 0; i < this.selectedCompany.employees.length; i++) {
                description += i + ') ' + this.selectedCompany.employees[i].name
                    + ' - ' + this.selectedCompany.employees[i].position + '\n';
            }

            let selection = this.showCompanyMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createEmployee();
                    break;
                case '2':
                    this.deleteEmployee();
            }
        }
    }
    createEmployee() {
        let name = prompt('Enter name for new employee:');
        let position = prompt('Enter position for new employee');
        this.selectedCompany.employees.push(new Employee(name, position));
    }
    deleteEmployee() {
        let index = prompt('Enter the index of the employee you wish to delete:');
        if (index > -1 && index < this.selectedCompany.employees.length) {
            this.selectedCompany.employees.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();
