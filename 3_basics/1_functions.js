function name(){
    console.log("kokil");
}

// name()

// function add(num1,num2){
//     console.log(num1 + num2);
// }

// add(1,4)


function add(num1,num2){
    return num1 + num2
}

// console.log("Result: ",add(1,4));



function msg(name /*= "Sam"*/){

    if(name==undefined){
        console.log("Enter valid name");
        return
    }
    return `${name} just logged in...`
}
// console.log(msg());



function price(...num){
    return num;
}
// console.log(price(100,200,300));


const user = {
    name:"kavya",
    age: 19
}
function handleObject(abc){
    console.log(`User name is ${abc.name} and age is ${abc.age}`);
    
}
// handleObject(user)
// handleObject({
//     name: "kokil",
//     age: 23
// })


const newArr = [1,2,3,"kavo"]

function func1(array){
    console.log(array[3]);
    
}
func1(newArr)