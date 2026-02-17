const myArr = [1,2,3,4,5]
console.log(myArr[3]);

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.shift()
console.log(myArr);

myArr.unshift(100)
console.log(myArr);

console.log(myArr.includes(10));
console.log(myArr.indexOf(5));


const newArr = myArr.join()
console.log(newArr);


const kokil = [1,2,3,4,5]
const new1 = kokil.slice(0,3)
console.log(new1);
console.log(kokil);

const new2 = kokil.splice(0,3)
console.log(new2);
console.log(kokil);


const kavya = ['a','b','c','d','e']
const new3 = kavya.splice(0,3)
console.log(new3);

