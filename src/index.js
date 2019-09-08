console.log(process.argv);
const args = process.argv.slice(2);
console.log('args :', args);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log('fruits :', fruits);
console.log('fruits.slice(1) :', fruits.slice(1));
console.log('fruits.slice(2) :', fruits.slice(2));
console.log('fruits.slice(3) :', fruits.slice(3));
console.log('fruits.slice(4) :', fruits.slice(4));
console.log('fruits.slice(5) :', fruits.slice(5)); 

console.log('1den 3e kadar : fruits.slice(1,3) :', fruits.slice(1,3));
console.log('2den 4e kadar : fruits.slice(2,4) :', fruits.slice(2,4)); // 