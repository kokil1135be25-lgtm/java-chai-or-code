const nums = [1,2,3,4,5,6,7]

// const newnums = nums.filter( (i) => {
//     return i>4
// })
// console.log(newnums);


// newnums2 = []

// nums.forEach( (i) => {
//     if(i>2) newnums2.push(i)
// })
// console.log(newnums2);


// const newnums3 = nums.map( (i) => i*2)
// console.log(newnums3);


const newnum4 = nums
.map( (i) => i*10)
.map( (i) => i+1)
.filter( (i) => i>40)
console.log(newnum4);

