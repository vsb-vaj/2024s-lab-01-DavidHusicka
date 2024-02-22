// Check functions which could help you solve these tasks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// 1 =================================
// Write function to parameterize a string.
// Example:
// console.log(parametrize("Javascript is the best"));
// "javascript-is-the-best"

// Your code:
export const parametrize = (input) => {
    let output = ""
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            output += '-';
        }
        else {
            output += input[i].toLowerCase();
        }
    }
    return output;
};

// 2 =================================
// Write function that takes object and return sentence
// Example:
// giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"})
// ➞ Hello Obi-wan from Starwars universe! It is nice to meet you! You look awesome for your 40, young Jedi!

// Your code:
export const giveSentenceForPerson = (obj) => {
    return `Hello ${obj.name} from ${obj.location}! It is nice to meet you! You look awesome for your ${obj.age}, young ${obj.position}`;
};

// 3 =================================
// Write function that takes string and replace all `a`, `e`, `i`, `o` with *
// Example:
// replace("Hello Javascript") ➞ "H*ll* J*v*scr*pt"

// Your code:
export const replace = (input) => {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o') {
            output += '*';
        }
        else {
            output += input[i];
        }
    }
    return output;
};