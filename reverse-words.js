/*const solution = (S) => {
    const reversedSentence = [];
    let currentWord = "";
  
    for (const char of S) {
      if (char === " ") {
        reversedSentence.push(currentWord.split("").reverse().join(""));
        currentWord = "";
      } else {
        currentWord += char;
      }
    }
  
    // Add the last word
    reversedSentence.push(currentWord.split("").reverse().join(""));
  
    return reversedSentence.join(" ");
  };
  
  // Example usage:
  const inputString = "we test coders";
  const reversedString = solution(inputString);
  console.log(reversedString); // Output: "ew tset sredoc"
  */

  const solution = (S) => {
    let reversedWord = '';
    let reversedSentence = '';
  
    for (const char of S) {
      if (char === ' ') {
        reversedSentence += reversedWord + ' ';
        reversedWord = '';
      } else {
        reversedWord = char + reversedWord;
      }
    }
  
    // Add the last word
    reversedSentence += reversedWord;
  
    return reversedSentence;
  };
  
  // Example usage:
  const inputString = "we test coders";
  const reversedString = solution(inputString);
  console.log(reversedString); // Output: "ew tset sredoc"
  