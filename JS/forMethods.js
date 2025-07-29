//For Methods

//for in

let obj={
    name:"javascript",
    dob:1995
}

for(let print in obj){
    console.log(obj[print])
}

//for of

let arr=[10,20,30,40,50]
for(let print of arr){
    console.log(print);
}

//for each

let arrays=[10,20,30,40,500]
arrays.forEach((cv,iv)=>{
    console.log(cv,iv)
})

// MRF Method - MAP REDUCE FILTER

let num=[1,2,3,4,5,6,7,8,9]
console.log(num)

//map
let sum=num.map((element)=>element*3)
console.log(sum)

//filter
let greater=num.filter((ele)=>ele>5)
console.log(greater)

//reduce
let reduce=num.reduce((accumulator,cv)=>accumulator+cv,100)
console.log(reduce)
