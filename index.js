// Program to capitalize the first letter of each word in a sentence

function capitalizeWords(sentence) {
    return sentence
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

const sentence = "javascript is a powerful programming language";

const result = capitalizeWords(sentence);

console.log("Original:", sentence);
console.log("Capitalized:", result);
