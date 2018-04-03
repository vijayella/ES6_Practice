
/*
ES5 Implementation vs ES6 implementation
*/

var firstname="vijay";
var lastname="kumar";
var age=30;

var person={
    //ES6 implementation
    firstname,//:firstname,
    lastname,//:lastname,
    age//:age

}
person;
//Adding keys dynamically in different ways
function getKey(){
    return 'address';
}
var key='lastname'
var men ={
    firstname,
    [key]:'kumar',
    ['age']:30,
    [getKey()]:'testing'
}

men;


//Method Properties

//ES5 imlementation in comments

var person1={
    name:"vijay",
    age:30,
   // getAge:function getAge(){
       //ES6
       getAge (){
        this.age++
    }
}

person1.getAge();
person1;

const confused = 'no';
const myKey = confused;
const obj = {
    [myKey]: false
}
console.log(obj);