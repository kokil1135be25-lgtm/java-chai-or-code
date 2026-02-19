let arr1 = [1,2,3,4]

for(i=0;i<arr1.length;i++){
    const element = arr1[i]
    // console.log(element);
    
}


const name = "kokil"
for(const i of name){
    // console.log(i);
    
}


const obj1 = {
    name: "kavo",
    age: "18"
}
for(const i in obj1){
    // console.log(obj1[i]);
    
}


const new1 = ["kokil",2,3,4,5]
for(const i in new1){
    // console.log(new1[i]);
}


const coding = ["js","py","cpp"]

// coding.forEach( function (i){
//     console.log(i); 
// } )

// coding.forEach( (i) => {
//     console.log(i);
// } )

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)


// coding.forEach( (i,index,arr) => {
//     console.log(i,index,arr);
// } )


const mycode = [
    {
        name: "js",
        age: "200"
    },
    {
        name: "kavo",
        age:  188
    }
]
mycode.forEach( (i) => {
    console.log(i.name);
    
})