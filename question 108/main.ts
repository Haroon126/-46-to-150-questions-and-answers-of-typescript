// : Compare two strings to check if they are identical, ignoring case sensitivity.

const string_Identical = (str1: string, str2: string): boolean => {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

console.log(string_Identical("Haroon", "haroon"));
console.log(string_Identical("Memon", "memon"));
