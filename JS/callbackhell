// call back hell

function one(a){
    setTimeout(() => {
        console.log("One"); 
        a()       
    }, 2000);
}
function two(b){
    setTimeout(() => {
        console.log("two");   
        b()     
    }, 900);
}
function three(c){
    setTimeout(() => {
        console.log("three");   
        c()     
    }, 4000);
}
function four(d){
    setTimeout(() => {
        console.log("four");   
        d()     
    }, 800);
}
function five(b){
    setTimeout(() => {
        console.log("five");     
    }, 3000);
}

one(()=>{
    two(()=>{
        three(()=>{
            four((five))
        })
    })
})
