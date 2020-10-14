// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Hint Math.sign or -1 is a negative greater than 0 or less than 0

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
