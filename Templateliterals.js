var age=10;
var name="vijay";
var x = `My name is ${name}. My age is ${age}`
x;

var message = `My name       is vijay
        My age is 
    10`

message;

const activities=[
    'running',
    'Reading',
    'playing'
]

const messg = `My name is vijay and i like  ${activities
   .map(activity=>{
    return `${activity}!`
    }).join(',')}`;

console.log(messg);


/*
template literals example
*/

const names = ['roger', 'alex', 'bob'];
const message1 = `Will the following ${names.length} students please report to the office: ${names.join(', ')}`
console.log(message1);


function underscore (strings, ...values) {
    console.log(strings[0]);
    return strings[0].replace(/\s/g, '_');
}
 
const message2 = underscore`there      is no cow level`
 
console.log(message2);



function error (strings, err) {
    error = `status: ${err.status}, message: ${err.message}`
    return `${strings[0]}{${error}}`
}
 
const err = {
    message: 'oh no, an error!',
    status: 404
}
 
const message3 = error`An error has occurred: ${err}`
 
console.log(message3);

function sumItUp (strings, ...values) {
    let sum;
   // console.log(strings[0]);
    values.forEach((value) => {
        sum= value;
        console.log(sum);
    });
    // TODO: sum up all interpolated values into a sum variable
    return `the total sum was $${sum}`
}

const a=20;
const b=30;

const message4 =sumItUp`the total sum was ${a+b}`
console.log(message4);