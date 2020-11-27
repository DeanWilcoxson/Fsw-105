/* jshint esversion: 6 */
let employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}
let theBoss = new Employee("Darth Vader", "Corrupted Jedi", "$2,000", "Full-time");
let theAssistant = new Employee("John Wayne", "Gunslinger", "$1,000", "Full-time");
let theGrunt = new Employee("The Hulk", "Avenger-For-Hire", "$5,000", "Contract");
Employee.prototype.printEmployeeForm = function() {
    console.log(`${this.name} ${this.jobTitle} ${this.salary} ${this.status}`);
};
Employee.prototype.hireOnEmployee = function() {
    this.status = "Part-time";
};
theGrunt.hireOnEmployee();
theGrunt.printEmployeeForm();
theBoss.printEmployeeForm();
theAssistant.printEmployeeForm();
employees.push(theBoss, theAssistant, theGrunt);