// SINGLETON
// Object.create

// OBJECT LITERALS
    const info = {
        name: "koku",
        age: 19,
        clg: "shimla" 
    }
console.log(info["name"]);
console.log(info.name);

info.age = 21
console.log(info.age);

// Object.freeze(info)         /*AFTER FREEZING, U CANT EDIT THE ARRAY*/ 
// info.name = "kavya"
// console.log(info.name);

info.greeting = function(){
    console.log("hello guys");
}
console.log(info.greeting());
