//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
//    
//}
//for (let i = 0; i <= 10; i++){
//    console.log(i);
//}

const myStates = ["Rajasthan", "Delhi", "Assam", 1947, "Tamil Nadu", "Maharashtra"];

for(let i = 0; i < myStates.length; i++){
    if(typeof myStates[i] !== 'string') break;
    console.log(myStates[i]);
}
