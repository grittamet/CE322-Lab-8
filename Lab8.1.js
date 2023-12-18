class Employee{
    constructor(name, id, age, position){
        this.name = name;
        this.id = id;
        this.age = age;
        this.position = position;
    }
}
let emp1 = new Employee('NestA', 'A0001', 30, 'Project Manager');
let emp2 = new Employee('Patrick', 'A0002', 23, 'Web Developer');
let emp3 = new Employee('Annie', 'A0003', 28, 'Software Engineer');
console.log("Employee 1")
console.log(emp1.name);
console.log(emp1.id);
console.log(emp1.age);
console.log(emp1.position);
console.log()
console.log("Employee 2")
console.log (emp2.name);
console.log (emp2.id);
console.log(emp2.age);
console.log(emp2.position);
console.log()
console.log("Employee 3")
console.log (emp3.name);
console.log (emp3.id);
console.log(emp3.age);
console.log(emp3.position);
