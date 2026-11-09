const phrase = process.argv[2];
const shift = Number(process.argv[3]);

if (!phrase || isNaN(shift)) {
  console.log("Please enter a phrase and a shift number.");
  process.exit();
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let result = "";

for (const char of phrase.toLowerCase()) {
  const index = alphabet.indexOf(char);

  if (index === -1) {
    result += char;
  } else {
    const newIndex = (((index + shift) % 26) + 26) % 26;
    result += alphabet[newIndex];
  }
}

console.log(result);