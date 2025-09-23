// function sayMyName () {
//   console.log("S");
//   console.log("N");
//   console.log("E");
//   console.log("H");
//   console.log("A");
// }

// sayMyName()



// function addTwoNum (num1, num2) {
//   let result = num1 + num2;
//   return result;
//   //return ke baad aur koi statement print nahi hota hai
//    console.log("SNEHA");
// }

// const result = addTwoNum(3,5)
// console.log("Result: ", result);

   function loginUserMessage (username) {
    if (username === undefined) {
         console.log("please enter a username")
         return
    }
     return  `${username} just logged in`
 }
 console.log((loginUserMessage("Sneha")));

 //... provides multiple values to take in and give them as an array

// function  calculateCartPrice(val1,val2,...num1){      spread or rest operator
//     return num1
// }

// console.log(calculateCartPrice(200,300,500,800))

const user = {
    username : "sneha",
    price : 199,
}

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username}  and price is ${anyobject.price}`)
}
handleObject({
     username : "sneha",
      price : 789
    })



    const myNewArray = [20,40,50,60,70]

    function returnSecondValue(getarray) {
        return getarray[1]
    }

  console.log(returnSecondValue(myNewArray));