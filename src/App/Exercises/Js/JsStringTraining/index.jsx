import './styles.css';

export function Exercise() {
  //exercise 1

  function ucFirst(text) {
    const upperCaseText = text.toUpperCase();
    return upperCaseText.charAt(0) + text.slice(1);
  }

  // Test case
  console.log(ucFirst('john')); // Output: "John"

  //exercise 2

  function extractSentence(text) {
    const extracted = text.substr(0, 20);
    return extracted;
  }

  // Test case
  console.log(extractSentence("what I'd like to tell on this topic is:")); // Output: "what I'd like to tell"

  //exercise 3

  let str = 'hello World, hello people, hello you',
    split = str.split(' '),
    obj = {};

  for (let i = 0; i < split.length; i++) {
    if (obj[split[i]] === undefined) {
      obj[split[i]] = 1;
    } else {
      obj[split[i]]++;
    }
  }

  console.log(obj);

  //exercise 4
  function emailCheck(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  // Test cases
  console.log(emailCheck('abc@def.ghi')); // Output: true
  console.log(emailCheck('john.doe@example')); // Output: false (missing top-level domain)
  console.log(emailCheck('user@domain')); // Output: false (short domain)
  console.log(emailCheck('notanemail.com')); // Output: false (invalid format)

  // exercise 5
  function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the cleaned string is the same when reversed
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }

  // Test cases
  console.log(isPalindrome('level')); // Output: true (level is a palindrome)
  console.log(isPalindrome('Racecar')); // Output: true (Racecar is a palindrome, ignoring case)
  console.log(isPalindrome('hello')); // Output: false (hello is not a palindrome)
  console.log(isPalindrome('A man, a plan, a canal, Panama!')); // Output: true (ignoring non-alphanumeric characters)
}
