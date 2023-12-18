let EmpDetails = function(name, id, age, position){
    this.name = name;
    this.id = id;
    this.age = age;
    this.position = position;
};
EmpDetails.prototype.getName = function(){
    return this.name;
};
EmpDetails.prototype.getId = function(){
    return this.id;
};
EmpDetails.prototype.getAge = function(){
    return this.age;
};
EmpDetails.prototype.getPosition = function(){
    return this.position;
};
let emp1 = new EmpDetails('NestA', 'A0001', 30, 'Project Manager');
let emp2 = new EmpDetails('Peter', 'A0002', 23, 'Web Developer');
let emp3 = new EmpDetails('John', 'A0003', 28, 'Software Engineer');
console.log("Employee 1")
console.log(emp1.getName());
console.log(emp1.getId());
console.log(emp1.getAge());
console.log(emp1.getPosition());
console.log();

console.log("Employee 2")
console.log(emp2.getName());
console.log(emp2.getId());
console.log(emp2.getAge());
console.log(emp2.getPosition());
console.log();

console.log("Employee 3")
console.log(emp3.getName());
console.log(emp3.getId());
console.log(emp3.getAge());
console.log(emp3.getPosition());
