var fruits=['Banana','orange','Apple'];
var flower=['rose','merrygold','sunflower','Hibiscus'];
var tree=fruits.concat(flower); 
var tree_1=fruits.concat(...flower); 
console.log(tree);
console.log(tree_1);