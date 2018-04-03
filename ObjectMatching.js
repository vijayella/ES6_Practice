 
 function getObject(){
return {
        x:10,
        y:20,
        z:30,
        a:40
}
 }

 const {
     a,
     x,
     y
 } = getObject();

 a;
 x;
 y;

 function* randomHexGenerator(arr){
    while(true){
        yield Math.floor(Math.random()*16777215).toString(...arr)
    }
   
}

const itr = randomHexGenerator([2,3,4]);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());