function arithmatic(){
let a=10
let b=5

console.log(a+b,a-b,a*b,a/b,a%b,a**b)

a++
console.log(a)
b--
console.log(b)
}

arithmatic()

function assignment(){
    let a=10
    let b=5
    let c=a+=b
    console.log(c) //a=a+b
    console.log(a-=b) //a=a-b a=15-5
}

assignment()

function equality(){
    let a=10
    let b="10"

    console.log(a==b)
    console.log(a===b)

}

equality()

function comparison(){
    let a=10
    let b=5
    let c=10
    let d="10"
    console.log(a<b)
    console.log(a>b)
    console.log(a<=c)
    console.log(a>=b)
    console.log(a!=b)
    console.log(a!==d)
}

comparison()

function logical(){
    let a=true
    let b=false
    console.log(a&&b)
    console.log(10===10 && 10<15) // AND operator
    console.log(10==10 || 10>15) // OR operator
}

logical()

function ternary(){
    let a=10>15 ? "yes, it's true" : "no, it's incorrect"
    console.log(a)
}

ternary()

