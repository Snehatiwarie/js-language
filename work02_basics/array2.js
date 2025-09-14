const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];
const ind_heroes = ["shaktiman","hanuman","bheem"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all = marvel_heroes.concat(dc_heroes,ind_heroes);
// console.log(all);


// const all_new_heroes = [...marvel_heroes,...dc_heroes,...ind_heroes];
// console.log(all_new_heroes);


//checks if it is array or not
console.log(Array.isArray("Sneha"));
//converts array into arrray
 console.log(Array.from("Sneha"));
// will return empty string because we have'nt define whether we want to print key or value
 console.log(Array.from({name:"Sneha"}));

 //conerting variables to arrays
 let score1 = 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score1,score2,score3));