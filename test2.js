/*
You are given a string S of N digits.
What is the largest sum of two two-digit fragments of S?
The selected fragments cannot overlap
Write a function:
function solution(S);
that, given a string S, returns the largest sum of two two-digit numbers that are non-overlapping fragments of S.
 Examples: 
 Given S = "43798", the function should return 141. The chosen fragments are "43" and "98"
 Given S = "00100", the function should return 10. The chosen fragments are "00" and "10"
 Given S = "0332331", the function should return 66. The chosen fragments are "33" and "33"
 Given S = "00331", the function should return 34. The chosen fragments are "03" and "31"

N is an integer within the range [4..100];
string S is made only of digits(0-9)
*/

function solution(S) {
    const N = S.length;
    let maxSum = 10; // Initialize to the smallest possible valid value (10)
  
    // Helper function to convert a string of digits to a two-digit number
    function toTwoDigitNumber(str) {
      return parseInt(str, 10);
    }
  
    // Iterate through the string to find the maximum sum of non-overlapping two-digit fragments
    for (let i = 0; i < N - 2; i++) {
      for (let j = i + 2; j < N; j++) {
        const fragment1 = S.substring(i, i + 2);
        const fragment2 = S.substring(j, j + 2);
  
        if (fragment1[0] !== '0' && fragment2[0] !== '0') {
          const sum = toTwoDigitNumber(fragment1) + toTwoDigitNumber(fragment2);
          maxSum = Math.max(maxSum, sum);
        }
      }
    }
  
    return maxSum;
  }
  
  // Test cases
  console.log(solution("43798")); // Output: 141
  console.log(solution("00100")); // Output: 10
  console.log(solution("0332331")); // Output: 66
  console.log(solution("00331")); // Output: 34
  
  
  