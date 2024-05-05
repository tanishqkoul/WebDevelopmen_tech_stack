let a = prompt("Enter first number :")

let b = prompt("Enter second number :")

if (isNaN(a) || isNaN(b)){

    throw SyntaxError("Sorry Java script does not allow this")
}

let sum = parseInt(a) + parseInt(b)

function main(){

    let x = 1;
    try {
        console.lo("The sum is " , sum *x)
        return true
    }
    catch(err){
        console.log("Mere bhai error ah gaya . Dakh le syntax hoga pakka")
        return false
    }
    finally{
        console.log("all the files will be closed shortly")
    }
}

let c = 