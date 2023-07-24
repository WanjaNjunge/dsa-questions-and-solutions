/* USING MAP()
*/

  const longest_consec = (strarr, k) => {
    const n = strarr.length;
  
    // Check if the input is valid
    if (n === 0 || k > n || k <= 0) {
      return "";
    }
  
    const lengths = strarr.map((str, i) => {
      const length = strarr.slice(i, i + k).reduce((acc, str) => acc + str.length, 0);
      return length;
    });
  
    const maxLengthIndex = lengths.indexOf(Math.max(...lengths));
  
    // Concatenate the k consecutive strings from the original array
    return strarr.slice(maxLengthIndex, maxLengthIndex + k).join("");
  };



  

  const result1 = longest_consec(
    ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"],
    2
  );
  console.log(result1); // Output: "folingtrashy"
  
  const result2 = longest_consec(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  );
  console.log(result2); // Output: "abigailtheta"



