const user = {
    name: "koku",
    age: 19,
    msg: function(){
        console.log(`${this.name}, good morning`);
        
        console.log(this);
        
    }
}
// user.msg()

// user.name = "kavoo"
// user.msg()

// console.log(this);


function chai(){
    let name = "koku"
    console.log(this.name);
}

// chai()

// const add = (n1,n2) =>{
//     return n1 + n2
// }

const add = (n1,n2) => n1 + n2

const new1 = () => {
   return {name: "koku"}
}

console.log(add(2,3))

console.log(new1());
