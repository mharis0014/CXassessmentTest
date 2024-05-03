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
