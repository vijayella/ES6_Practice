const x ={}
x['a']=12;
x;
x['b']=3;
x;  

const y=1;
const negativeNumbers =[];
function extractNegativeNumbers(numbers){
let y=0;
     numbers.forEach(element => {
        if(element<y){
            console.log(element)
            negativeNumbers.push(element);
        }
    });
return negativeNumbers;
}
let z = extractNegativeNumbers([1,-2,4,-3,-6]);
z;


let largestString;

function findLargestString (Strings){
let x= 0;
let y;
    Strings.forEach(element =>{
         if(x<element.length){
             x=element.length;
            y=element;
         }
    })
    return y;
}

let StringArray = ['vijaykumar','Gruhalakshmi','ajay','anusha'];
largestString = findLargestString(StringArray);
largestString;





const a=2;
{
    const a=3;
    {
        const a=4;
    }
}

const MAX = 5;
 
for (var i = 0; i < MAX; i++) {
  setTimeout(function() {
    console.log(i);
  });
}
 
for (let i = 0; i < MAX; i++) {
  setTimeout(function() {
    console.log(i);
  });
}

//Arrow functions

const arr =[1,2,3,4];
//Function with return value must be in {}
const f = arr.map(number=>{
   return  number * 2
}
);
//Single statement function
const m = arr.map(number=>
    number*2
)
//Creating an object
const obj = arr.map(number=>({
    number:number*2
})
)
f;
m;
obj;


//Usage of this in the method
let obj1 = {
    value:0,
    increment: function(){
        that=this;
        setTimeout(function(){
          //  this.value++ will print NAN as value is in object scope
          that.value++
            console.log(that.value);
        },1000)
    }
}
obj1.increment();



let obj2 = {
    value:0,
    increment: function(){
        setTimeout(()=>{
          //  We should use arrow function, if we need to bind this of just above scope.
          this.value++
            console.log(this.value);
        },1000)
    }
}
obj2.increment();

//This concept
const person = {
    name: 'bob',
    updateName: function () {
    (() => {
    this.name = 'suzy'
    })();
    }
   }
   person.updateName()
   console.log(person.name);

   //This concept
   const person1 = {
    name: 'bob',
    updateName: function () {
    (function() {
    this.name = 'suzy'
    })();
    }
   }
   person1.updateName()
   console.log(person1.name);




function ListPrefixer (list, prefix) {
    this.list = list;
    this.prefix = prefix;
    console.log(this.list,this.prefix)
}
ListPrefixer.prototype.transform = function (cb) {
    this.list = this.list.map(cb);
}
ListPrefixer.prototype.applyPrefix = function() {
    this.transform(function (number) {
        return this.prefix + number;
    })
}
ListPrefixer.prototype.applyPrefixArrow = function() {
    this.transform((number) => {
        return this.prefix + number;
    })
}
 
const request = new ListPrefixer([1, 2, 3], '*');
 
request.applyPrefix();
console.log(request.list);
 
request.applyPrefixArrow();
console.log(request.list);

//Default Parameters

function buy(item='Milk',amount=6){
    item;
    amount;
    return;
}
buy('eggs',2);
buy('eggs');
buy("",4);

//rest operator represented by '...'

function argumentsfun(...arr){
console.log(arr);
}
//We should not pass any argument after rest parameter.
function argumentsfun(age,siblings,...arr){
console.log(age);
console.log(siblings)
console.log(arr);//rest of the array
}

argumentsfun(1,2,3,'Hello','World',{})
/*
Spread operator is used to concatenate or spread the arguments.

*/
const string="vijaykumar";
const chars=[...string];
chars;

function spreadFunction(...args){
    let args1 = [...args];
    console.log(args1.join(''));
}
spreadFunction(1,2,3,'vijay','lakshmi');

function add(a,b){
    return a+b;
}

let addargs = [10,20];
console.log(add(...addargs))

let arry = [];
arry.push(10, ...[1,2,3],50);
arry;

let arry1 = [...arry];
arry1;
arry.unshift(20);
arry;
arry1;


let max = Math.max(...arry1);
max;
/*
he reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
*/ 
function sum(...numbers) {
    return numbers.reduce((acc, number) => acc + number);
}
 
const answer = sum(1, 5, 20, 10);
 
console.log(answer);

/* the first parameter is the base number we add to the other numbers 
that we multiply by two; therefore, the returned value is an array of length 4
 only containing the REST of the parameters after base.*/
function multiplyBy2(base, ...numbers) {
    return numbers.map(number => number * 2 + base)
}
 
const answer1 = multiplyBy2(100, 1, 5, 20, 10);
 
console.log(answer1);

/*
the spread operator will basically take each
 element of the array you are applying 
the spread to and flatten it out into either 
arguments or another array provided
*/

const names = [
    'bob', 
    ...[
        'donald'
    ],
    'suzy', 
    'lacy',
    ...[
        'richard', 
        'alex'
    ]
   ]
   console.log(names);