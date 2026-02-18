const tinder = {}

tinder.name = "kokil"
tinder.age = 18

// console.log(tinder);


const a = {
    name : {
        fullname : {
            answer : "kokil sharma",      
        }
    }
}
// console.log(a.name.fullname.answer);


const new1 = {1:'a',2:'b'}
const new2 = {3:'c',4:'d'}

// const new3 = Object.assign({},new1,new2)

const new3 = {...new1,...new2}
// console.log(new3);



const office = [
    {
        name: "koku",
    },
    {

    },
    {

    }
] 
// console.log(office[0].name);



console.log(Object.keys(new1));
console.log(Object.values(new1));
console.log(Object.entries(new1));

console.log(new1.hasOwnProperty(2));


