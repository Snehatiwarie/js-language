// const user = {
//     username : "sneha",
//     price : 999,
//     welcomeMessage : function () {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this); //current context ko refer karta hai ji
//     }
// }
// user.welcomeMessage();
// user.username = "tuktuk"
// user.welcomeMessage();
// console.log(this);

// function chai() {
//     let username = "sneha"
//     console.log(this.username)  // here in function we cant access it like this
// }
// chai()

//ARROW FUNCTION
// const chai = () => {
//     let username = "sneha"
//     console.log(this.username)
// }

const addTwo = (num1 ,num2) => {
   return num1 + num2
}
console.log(addTwo(3,5));