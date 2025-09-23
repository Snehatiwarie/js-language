// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sneha"
// tinderUser.isLoggedin = false

// //console.log(tinderUser);

// const regularUser = {
//     email : "sneha@gmail.com",
//     //nesting
//     fullname: {
//         userfullname : {
//         firstname : "Sneha",
//         lastname : "Tiwari"
        
//         }
//     }
// }
// //retriving nested objects
// //console.log(regularUser.fullname.userfullname.firstname);

// const obj1  = {1:"a", 2:"b"}
// const obj2 =  {3: "a",4 :"b"}
// const obj4 =  {4 :"a", 5: "b"}

// //const obj3 = {obj1 ,obj2}
// //const obj3 = Object.assign( {},obj1, obj2, obj4)

// const obj3 = {...obj1,...obj2}

// //console.log(obj3);

// const users = [
//     {
//         id :1,
//         email : "tiwari@gamil.com",
//     },
//      {
//         id :1,
//         email : "tiwari@gamil.com",
//     },
//     {
//         id :1,
//         email : "tiwari@gamil.com",
//     }
// ]
//for extracting 1st object from array when array has multiple objects
// console.log(users[1].email);
// console.log(tinderUser);
// //saare keys ko array banake return karega and you can perform many functions eg.loop lagana array par 
// console.log(Object.keys(tinderUser));
// //saare valuue ko array banake return karega
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//to check if a value is declared in an array or object
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// const course = {
//     coursename :"js advanced",
//     price : 999,
//     courseInstructor : "sneha"
// }

//  const {courseInstructor} = course ;
// // const {courseiInstructor:instructor} = course
//  console.log(courseInstructor);
// // console.log(instructor);



//DE-STRUCTURING OF OBJECTS
const course = {
  coursename : "Learn backend",
  courseInstructor : "Sneha Tiwari",
  price : "999",
}

const {courseInstructor} = course
console.log(courseInstructor);

const navbar = ({company}) => {

}

navbar(company = "hitesh")