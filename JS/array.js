//array

let fruit=["apple", "orange", "banana", "grapes", "papaya"]

console.log(fruit)
console.log(fruit[2])

fruit.push("kiwi")
console.log(fruit)

fruit.pop()
console.log(fruit)

fruit.shift()
console.log(fruit)

fruit.unshift("strawberry")
console.log(fruit)

console.log(fruit.includes("kiwi"))

let num=[1,2,3]
console.log(fruit.concat(num))

console.log(fruit)

console.log(fruit.slice(-3,-1))

console.log(fruit.splice(1,2,"kiwi"))
console.log(fruit)

console.log(fruit.splice(1,0,"apple"))
console.log(fruit)
fruit.reverse()
console.log(fruit);

fruit.sort()
console.log(fruit);

fruit.reverse()
console.log(fruit);
