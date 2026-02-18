let a =100
if(true){
    let a = 10
    // console.log("Inside a: ",a);
    
}
// console.log("Outside a: ",a);


function one(){
    const name = "kokuuu"

    function two(){
        const age = 19 
        console.log(name);
        
    }
    // console.log(age);
    two()
}
one()