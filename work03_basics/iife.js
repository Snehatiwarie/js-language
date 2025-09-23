//global scope ke polution ko hatane ke liye iife ka use karte hai
//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai() {   //named IIFE
    console.log(`DB CONNECTED`);
})();  // yaha semi collon expilcitly lagaya hai taaki code wahi kahtam hho jaaye

//()() // one is for function declaration and other for function call
 
((name) => {
    console.log(`DB CONNECTED TO TWO ${name}`)
})("sneha")
