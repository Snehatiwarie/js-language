if (true) {
    let a = 10
    const b =  20
    var c = 40
}

// console.log(a);
// console.log(b);
//console.log(c);

function one () {
    const username = "Sneha"

    function two () {
        const website ="youtube"
        console.log(username);
    }

    //console.log(website)
    two()
}
one()

if(true) {
    const username = "sneha" 
    if (username === "sneha") {
        const website = " youtube"
        console.log(username + website)
    }
    //console.log(website);
}
//console.log(username);

//-------------+intneresting+----------------

console.log(addOne(5));
function addOne(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num) { // here fucntion is passed as a variable
    return num + 2
}
