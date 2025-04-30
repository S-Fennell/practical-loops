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
//Feeling Loopy

let data ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let key =1;

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

for(let i = 0; i < data.length; i++){
   
    switch (key) {
        case 1:
            if(data[i] === ","){
                key = 2;
            }else{
                cell1 += data[i];
            }
        
            break;

        case 2:
            if(data[i] === ","){
                key = 3;
            }else{
                cell2 += data[i];
            }
        
            break;
        case 3:
        if(data[i] === ","){
            key = 4;
        }else{
            cell3 += data[i];
        }
    
        break;
        case 4:
            if(data[i] === "\n" || i === data.length - 1){
                key = 1;
                console.log(cell1, cell2, cell3, cell4);
                cell1 = "";
                cell2 = "";
                cell3 = "";
                cell4 = "";

            }else{
                cell4 += data[i];
            }
        
            break;
    
        default:
            break;
    }
}







