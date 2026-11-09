const phrase = process.argv[2];
const vowels = "aeiou";

if (!phrase) {
  console.log("Please enter a phrase.");
  process.exit();
}

const words = phrase.split(" ");
const translated = [];

for (const word of words) {
  const lower = word.toLowerCase();
  let newWord = "";

  if (vowels.includes(lower[0])) {
    newWord = lower + "way";
  } else if (vowels.includes(lower[1])) {
    newWord = lower.slice(1) + lower[0] + "ay";
  } else {
    newWord = lower.slice(2) + lower.slice(0, 2) + "ay";
  }

  if (word[0] === word[0].toUpperCase()) {
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  }

  translated.push(newWord);
}

console.log(translated.join(" "));