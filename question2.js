// Q#2: Write a function that will take a string as input, check and return if it is palindrome or
// not. For example, if the string is “madam” the function should return true and if the string
// is “doctor” it should return false.

function isPalindrome(str) {
  const s = str.toLowerCase();

  let first = 0;
  let last = s.length - 1;

  while (first < last) {
    if (s[first] !== s[last]) {
      return false;
    }

    first++;
    last--;
  }
  return true;
}

const str1 = "madam";
const str2 = "doctor";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
