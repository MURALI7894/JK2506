console.log("JK")
console.log(2506)

//single line command

/*
multiline command
*/

//variable declaration
//small & caps letter can be used, number can used (but not used in starting), special char $ _ can be used

//let

let fruit;
fruit="apple"
console.log(fruit)

let a=20, b=30
console.log(a,b)

let veg="tomato"
console.log(veg)

a=40
console.log(a) //re-asn and can't re-declare

//const

const abc="MS"
console.log(abc) // can't re-asn & re-declare

//var

var jk="white"
console.log(jk)
jk="brown"
console.log(jk)
var jk="pink"
console.log(jk) // can do re-asn & re-declare

//hoisting to support in var
//console.log(win)
//let win - can't able
//const win - can't able
//var win - can able

//scope

{
    let red="rose" // blocked scope
    const yellow="lemon" // blocked scope
    var green="mango" // scope
}

console.log(green)
