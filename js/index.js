// Iteration 1: Names and Input
let hacker1 = "Carlos";

console.log (`The driver´s name is ${hacker1}.`);

let hacker2 = "Diego";

console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log (`The navigator has the longest name, it has ${hacker2.length} characters.`);
}
    else { 
        console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }


// Iteration 3: Loops

let uppercasedName = ""

for (let i = 0; i < hacker1.length; i++) {
    let uppercased = hacker1.toUpperCase();
    uppercasedName += uppercased[i] + " ";
}

console.log (uppercasedName)


/*let reversedName = "";
let reversed = hacker2.length;

for (let i = 0; i < hacker2.length; i++) {
    let reversedLetter = hacker2[i];
    reversed = reversed - 1
    reversedName += reversedLetter    
    }

console.log (reversedName)*/

let reversedName2 = "";
let reversed2 = hacker2.length;

for (let i = 0; i < hacker2.length; i++) {
        let reversedLetter2 = hacker2.slice((reversed2-2),(reversed2-1));
        reversed2 = reversed2 - 1;
        reversedName2 += reversedLetter2 + " ";
        }

    
console.log (`${hacker2.charAt(hacker2.length-1)} ${reversedName2}`)


if("hacker1".localeCompare("hacker2")) {
    console.log(`The driver's name ${hacker1} goes first`);
  }
  else if("hacker2".localeCompare("hacker1")) {
    console.log(`Yo, the navigator ${hacker2} goes first definitely`);
  }
  else{
    console.log(`What?! You both have the same name?${hacker2}`);
  }
