//set time out // this is asynchronous type

function set(){
    setTimeout(() => {
        console.log("Hello World");
    }, 2000);
}
function brush(){
    setTimeout(() => {
        console.log("Time taken for brush is 1500");
    }, 1500);
}
function bath(){
    setTimeout(() => {
        console.log("Time taken for bath is 3000");
    }, 3000);
}
function ready(){
    setTimeout(() => {
        console.log("Time taken to ready is 2250");
    }, 2250);
}
function eat(){
    setTimeout(() => {
        console.log("Time taken to eat is 3500");
    }, 3500);
}
set()
brush()
bath()
ready()
eat()

// example for synchronous type

function murali(){
    console.log("Hello");
}
function venu(){
    console.log("Hi");    
}
function abi(){
    console.log("Welcome");
}
murali()
venu()
abi()