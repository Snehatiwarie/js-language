///object literal 

const mySym = Symbol("key1");
const JsUser = {
    name : "SNEHA",
    "fullname": "Sneha Tiwari",
    age: 18,
    [mySym]: "mykey1",
    isLoggedin : false,
    location : "Indore",
    email : "tiwarisneha0202@gmail.com",
    lastLoggedinDays : ["Monday","Saturday"],
}
// two ways to declare objects in js
// console.log(JsUser.email);
// console.log(JsUser.fullname);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]);
// console.log(typeof mySym);


//to freeze onjects
//Object.freeze(JsUser);

//to overwrite
// JsUser.email = "tiwarisneha0202@gemii.com";
// console.log(JsUser.email);
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
