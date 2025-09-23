//for if 

const array = [0,1,2,3,4,5]
for (const num of array) {
   console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
   //console.log(`Each char is ${greet}`);
}

//maps -> has key value pairs

const map = new Map()
map.set("IN","INDIA")
map.set("CH","CHINA")
map.set("UK","UNITED KINGDOM")

console.log(map);

for (const [key,value] of map) {
   console.log(key, '=>', value);
}

//the same method doesnt work on objects
const myObject = {
   name : "sneha",
    age : 21,
}
for (const [key,value] of myObject) {
   console.log(key, '=>', value);
}
