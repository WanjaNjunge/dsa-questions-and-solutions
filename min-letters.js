/*
const min_letters_to_delete = (S) => {
    // Count occurrences of each letter and calculate deletions in a single pass
    const charCount = S.split('').reduce((count, char) => {
      count[char] = (count[char] || 0) + 1;
      return count;
    }, {});
  
    // Calculate total deletions required
    const deletions = Object.entries(charCount).filter(([key, count]) => count % 2 !== 0).length;
  
    return deletions;
  };
  */

  const min_letters_to_delete = (S) => {
    // Count occurrences of each letter and calculate deletions in a single pass
    const charCount = S.split('').reduce((count, char) => {
      count[char] = (count[char] || 0) + 1;
      return count;
    }, {});
  
    // Calculate total deletions required
    return Object.values(charCount).filter(count => count % 2 !== 0).length;
  };
  
  
  // Test cases
  console.log(min_letters_to_delete("acbcbba"));  // Output: 1
  console.log(min_letters_to_delete("axxaxa"));   // Output: 2
  console.log(min_letters_to_delete("aaaa"));     // Output: 0
  
  
  
  
  

  

  