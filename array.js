

const numbers =[1,2,3,4]
const arr = [5,6,7,8]
let [a,b,c,d]=numbers;
let [, , e, f] = arr;//
[a,b]=[c,d]
a;
b;
c;
d;
e;
f;

function getConfig(){
return [
    20,
    30,
    40,
    50,
    60
]
}

const [first,second,...rest] = getConfig();

first;
second;
rest;

var x=10;
var y=20;
function setConfig([s,z]){
x=s;
y=z;
}

setConfig([40,50]);

x;
y;

