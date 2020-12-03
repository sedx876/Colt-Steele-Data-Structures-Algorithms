//Write a function that calculates the sum of all numbers from 1 up 
//to and including some number n

//Two solutions

function addUpTo(n){
  let total = 0
  for (let i =1; i <= n; i++){
    total += i; //depending on what n is will decide how many operation there are
  }                //if n is a billion then there is a billion operations going on because of the loop
  return total
}

// function addUpTo(n){
//   return n * (n+1) / 2
// }

console.log(addUpTo(5))

//Time 
let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

//Number of operations
