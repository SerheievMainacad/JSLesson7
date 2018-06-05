//OOP principes in JS
//private
//incapsulation<<<<<<------------------------------------------
/*function Person(name, sname){
	//that, self, _this
	var that = this;
	that.name = name;
	that.sname = sname;
	that.sayHello = function(){
		alert(getFullName())
	}
	//set private method as public
	that.sayHelloToUser = userHello;
	//incapsulation<<<<<<------------------------------------------
	function getFullName(){
		return that.name + ' ' +  that.sname
	}
	function userHello(user){
		alert('Hello' + user + 'My name is'  + getFullName());
	}
	function debugPerson(){
		console.error('Error in Person');
	}
}*/


/*var Jack = new Person('Jack', 'Jackster');
Jack.sayHello();
Jack.sayHelloToUser('Owen');
*/

//inheritance
/*var Parent = new Person('Parent', 'Ivanov'); //
function Child(name, age){
	this.name = name;//polymorphism
	this.age = age;
}

Child.prototype = Parent;

var Petya = new Child('Petya', 1);
console.log(Petya);
console.log(Petya.name);
console.log(Petya.sname);

*/




//Object props = keys, values
//methods - create, seal, freeze, defineProperty(obj,key,descriptor), 
//definePropreties, 
// descriptor{value, configurable, enumerable, writable, get, set}


//obj for properties
/*var obj = {
	name: 'Jack',
	sname: 'Black',
	age: 12
}*/
//getter, setter
/*Object.defineProperty(obj, 'fullName', {
	get: function(){
		return 'My name is' +  this.name + '' + this.sname
	},
	set: function(pName){
		this.pName = pName;
	}
})
console.log(obj.fullName);
obj.fullName = 'Jackovich';
console.log(obj.pName);*/

/*
	{} - descriptor
	Object.defineProperty(object, propertyName, {value, writable, configurable, enumerable, set, get})	
	Object.defineProperties(object, {
		'property1Name': descriptor1,
		'property2Name': descriptor2
		....
	})
*/
/*Object.defineProperty(obj, 'sname', {value: 'Black', enumerable: true});
Object.defineProperty(obj, 'age', {enumerable: false, writable: false, configurable: false})
Object.defineProperties(obj, {
	'someProperty': {
		value: 'value1',
		enumerable: true
	},
	'key2': {
		value: 'value2',
		enumerable: true
	}
})
console.log(obj);
for(var key in obj){
	console.log(obj[key])
}
delete obj.age;
console.log(obj.age);

function Person(name){
	Object.defineProperty(this, 'name', {value: name})
}*/

/*Object.defineProperty(obj, 
	'someProperty', 
	{
		get:function(){
			return this.name;
		},
		set: function(newName){
			this.name = newName;
		}
	})
console.log(obj.name);
obj.someProperty = 'OtherPerson';
console.log(obj.someProperty);*/

//obj for obj methods
/*var obj = {
	name: 'Jack',
	sname: 'Black',
	age: 12
}
Object.freeze(obj);
obj.smth = 'new prop';
obj.smtah = 'new222p2r2o2p';
obj.name = 'NewName';

console.log(obj);

var obj2 = {
	name: 'J',
	sname: 'B',
	age: 12
}
Object.seal(obj2);
obj2.smth = 'new prop';
obj2.smtah = 'new222p2r2o2p';
obj2.name = 'NewName';

console.log(obj2);
console.log(Object.keys(obj2));
console.log(Object.values(obj2));*/
/*var homoSapiens = {
	legs: 2,
	hands: 2
}
var Human = Object.create(homoSapiens);
Human.name = 'SomeOne';
console.log(Human);
*/


//call, apply, bind, IFFI functions, immediate call functions

/*(function(a){return a})(2)*/