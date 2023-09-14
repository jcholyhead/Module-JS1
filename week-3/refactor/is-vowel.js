function isVowel(letter) {
  return (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  );
}

function isVowel(letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(letter);
}

// here is an implementation of isVowel - this function checks if a letter is a vowel

console.log("case: letter a...");
const currentOutput = isVowel("a");
const targetOutput = true;
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

console.log("case: letter e...");
const currentOutput2 = isVowel("e");
const targetOutput2 = true;
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);

console.log("case: letter k...");
const currentOutput3 = isVowel("k");
const targetOutput3 = false;
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);
