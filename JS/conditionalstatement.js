//conditioinal statement
//if

let a=10
if(a===10 && a<20){
    console.log("true")
}

//else

let A=10
let B="10"
if (A===B){
    console.log("both datatype and value are same")
}

else{
    console.log('only values are same')
}

// else if

let num=10
if(num==1){
    console.log("the num is 1")
}

else if(num==2){
    console.log("the num is 2")
}
else if(num==2){
    console.log("the num is 3")
}

else{
    console.log("not defined")
}

//switch
let z=3

switch(z){
    case 1:
        console.log('num is one');
        break;
    case 2:
        console.log("num is two");
        break;
    case 3:
        console.log("num is three");
        break
    default:
        console.log("not a number");
}
