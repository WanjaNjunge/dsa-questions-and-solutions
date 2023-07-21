/*
You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from 'a'. Keep in mind that the consecutive vowel to 'u' is 'a' and the cycle continues.

Return an integer with the length of the consecutive vowels found.

This is better explained with a couple of examples:

You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the 'a' and make your way right. The next vowel is an 'e' and it is the consecutive vowel, then 'i' and so forth until you get to 'u'. If you keep moving right you find 'a' which happens to be the consecutive vowel. Return 6.
This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the 'a', then ignore the rest until you get to the 'e', which is the consecutive vowel, and so forth until you get to the 'o'. Return 4.
Note
For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. 'y' is not considered a vowel in this kata.

Good luck!
*/


// Function to count the number of ordered and consecutive vowels in the given string.
const consecutiveVowelsCount = (str) => {
  // Array containing the vowels in order.
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Initialize variables to keep track of consecutive vowel count and the current vowel index.
  let consecutiveCount = 0;
  let currentVowelIndex = 0;

  // Iterate through each character (char) in the input string (str).
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Check if the current character is a vowel (i.e., it exists in the vowels array).
    if (vowels.includes(char)) {
      // If the current character matches the vowel at the current index, it is consecutive.
      if (char === vowels[currentVowelIndex]) {
        // Increment the consecutive vowel count.
        consecutiveCount++;

        // Update the currentVowelIndex to move to the next vowel in the cycle (loop back to 'a' after 'u').
        currentVowelIndex = (currentVowelIndex + 1) % vowels.length;
      }
    }
  }

  // Return the final count of consecutive vowels found in the string.
  return consecutiveCount;
};

// Example usage:
const result1 = consecutiveVowelsCount("agrtertyfikfmroyrntbvsukldkfa");
console.log(result1); // Output: 6

const result2 = consecutiveVowelsCount("erfaiekjudhyfimngukduo");
console.log(result2); // Output: 4



