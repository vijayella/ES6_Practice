class Person{

    constructor(name,age){
        console.log(name);
        this._name=name;
        this._age=age;
    }
    
    get name(){
        return this._name;
    }
    set name(name){
        this._name=name;
    }
}
const person = new Person('vijay','30');
const name=person.name;
name;


class Car {
    constructor (speed,distance,running) {
        this.speed=speed;
        this.distance=distance;
        this.running-running;
        // TODO: Implement the constructor
        // - the car should have a "speed" member to keep track of the speed
        // - the car should have a "running" member to check if running is true or false
        // - the car should have a "distance" member to keep track of the distance driven
    }
    
    turnOn () {
        this.running=true;
        // TODO: Implement turnOn to set the "running" member to true
    }
    
    turnOff () {
        this.running=false;
        // TODO: Implement turnOn to set the "running" member to false
    }
    
    drive (hours) {
      
        if(this.running){
            this.distance=hours*this.speed;
        }
        return this.distance;
        // TODO: Implement this drive method to update "distance" to hours * this.speed 
        // ONLY WHEN the car is already running
    }
}
const car=new Car('60','100',true);
car.turnOn();
const distance = car.drive('10');
console.log(distance);