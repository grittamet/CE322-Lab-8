function Employee(name, age, position, baseSalary){
    this.name = name;
    this.age = age;
    this.position = position;
    this.baseSalary = baseSalary;
    let monthlyBonus = 3000;
    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus;
        console.log ('Final Salary is : '+finalSalary);
    }
    this.getEmpDetails = function (){
        console.log ('Name : '+this.name+' | Age : '+this.age+' | Position : '+this.position);
        calculateFinalSalary();
    }
}
console.log('Employee of Company');
let emp1 = new Employee('NestA', 30, 'Project Manager', 60000);
emp1.getEmpDetails();
let emp2 = new Employee('Patrick', 23, 'Web Developer', 20000);
emp2.getEmpDetails();
let emp3 = new Employee('Annie', 28, 'Software Engineer', 30000);
emp3.getEmpDetails();
console.log ('We love JavaScript Programming');
   
