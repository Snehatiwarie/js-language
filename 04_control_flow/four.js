const myObject =  {
    js : "javascript",
    py : "python",
    rb : "ruby"
}

for (const key in myObject ) {
   // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js","py","rb"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

// programming.forEach( function (val){
//     console.log(val);
// })

// programming.forEach( (item) => {
//     console.log(item);
// })

//or

// function printme(item) {
//     console.log(item);
// }

// programming.forEach(printme);

// for objects inside arrays
const myCoding = [
    {
        languageName : "js",
        languageFileName  : "javascript"
    },
    {
        languageName : "py",
        languageFileName  : "python"
    },
    {
        languageName : "cpp",
        languageFileName  : "c++"
    },
]
myCoding.forEach((item) => {
    console.log(item.languageName);
})