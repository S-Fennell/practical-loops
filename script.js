// //Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

//Prime Time
let n = 21;

while(true){
    let prime = true;
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            prime = false;
            break;
        }
    }
   
    if(prime){
        console.log(n + " is prime");
        break;
    }
    n++ 
}









