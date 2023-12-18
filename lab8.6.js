var Animal = function() {};
Animal.prototype.says = function() {
    return "I am an animal";
};
var Dog = function() {};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.says = function() {
    return "I am a dog";
};
var Cat = function() {};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.says = function() {
    return "I am a cat";
};
var Tiger = function() {};
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.says = function() {
    return "I am a tiger";
};
var Buffalo = function() {};
Buffalo.prototype = Object.create(Animal.prototype);
var animal = [new Animal(), new Dog(), new Cat(), new Tiger, new Buffalo() ];
for (var i = 0; i < animal.length; i++) {
    console.log(animal[i].says());
}
