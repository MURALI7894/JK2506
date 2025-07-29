let scooty=[]
console.log(scooty)

scooty.push("aerox", "avenis", "ray", "access","burgman")
console.log(scooty)

scooty.pop()
console.log(scooty)

scooty.unshift("activa")
console.log(scooty)

scooty.shift()
console.log(scooty)


let nam="jk"
let age=10
let tamil=85
let english=80
let cs=90
let total=tamil+english+cs
let average=total/3

console.log("NAME:",nam.toUpperCase())
console.log("AGE:",age)
console.log("TOTAL:",total)
console.log("AVERAGE:",average)

if(average>=40){
    console.log("RESULT: PASS")
}
else{
    console.log("FAIL")
}

//palindrome
let palindrome="MADAM"
pal=palindrome.split("").reverse("").join("")
console.log(pal)
if(palindrome===pal){
    console.log(palindrome,"is PALINDROME")
}
else{
    console.log(palindrome,"is not PALINDROME")
}

//odd or even
let num=7
if(num%2===0){
    console.log(num+"is EVEN")
}
else{
    console.log(num+"is ODD")
}

//student mark
function JK(tamil,english,cs){
    let total=tamil+english+cs
    let average=total/3
if(average>=91 && average<=100){
    console.log("Resule: EXCELLENT")
}
else if(average>=71 && average<=90){
    console.log("Resule: VERY GOOD")
}
else if(average>=56 && average<=70){
    console.log("Resule: GOOD")
}
else if(average>=36 && average<=55){
    console.log("Resule: AVERAGE")
}
else if(average<=35){
    console.log("Resule: FAIL")
}
}
JK(70,36,77)

//filter & map

let arr=["murali","venugopal","jk","jaikrish","sobana","krishanth"]
console.log(arr)

let greater=arr.filter((el)=>el.length>3)
console.log(greater)

let upp=arr.map((ele)=>ele.toUpperCase())
console.log(upp)
