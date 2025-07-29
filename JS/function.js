//function declaration

function fruit(){
    let a="apple", b="orange"
    console.log(a,"and",b,"is good for health")

}
fruit()

function info(name,age){
    console.log("my name is",name,"and my age is",age)
}
info("venu",30)
info("murali",30)
info("yoga",30)

//function expression

let veg=function(a,b){
    console.log(a,b,"are good for health")
}
veg("onion", "tomato")

//arrow function

let movie=(ticket,snacks,parking,petrol)=>{
    console.log("ticket price is "+(ticket+snacks+parking+petrol))
}
movie(200,100,50,100)


//IIFE - Immediately Invoked Function Expression

(function(a){
    console.log("hello",a)
})("kitty")

console.log("immediately invoked \t function expression")

console.log(`hello this is JK
i'm your son`)
