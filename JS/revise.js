let a="I am learning javascript"
console.log(a)
let b=a.split(" ").reverse(" ").join(" ")
console.log(b)


for (let i = 1; i <= 5; i++) {
  let c = "";
  for (let j = 5; j >= i; j--) {
    c+=j
  }
  console.log(c);
}

//1=>54321
//2=>5432
//3=>543
//4=>54
//5=>5