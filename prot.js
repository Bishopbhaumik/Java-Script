/*Creating a funtion touse in the array*/

Array.prototype.my = function(){

    for(i=0;i<this.length;i++){
       this[i]=this[i].toUpperCase();
    }

};
var fruits=['Banana','orange','Apple'];
fruits.my();
console.log(fruits);