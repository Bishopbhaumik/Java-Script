let arr1=[1,2,3,4,6,7];
const res = arr1.every( (element) =>  {
    
    return element >4;
     
});
console.log(res);

 arr1.forEach((element) =>{
 console.log(element);

});
// isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// const ages = [32, 33, 16, 40];

// ages.every(checkAge)

// const res=function checkAge(age) {
//   return age > 18;
// }
// console.log(res);