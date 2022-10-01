const inputElement = document.getElementById("input");
const outputResultElement = document.getElementById("output-result");
const outputReasonElement = document.getElementById("output-reason");

const NOT_EQUAL = String.fromCharCode(0x2260);
inputElement.addEventListener('input', (event) => handleInput(event));

//const reverse = text => [...text].reverse().join('');
function reverse(text) {
  const textInArray = [...text];
  const reversedArray = textInArray.reverse();
  const reversedText = reversedArray.join('');
  return reversedText;
}

function isPalindrome(text) {
  return text === reverse(text);
}

function getOutputResult(isPalindrome) {
  return isPalindrome ? "C'est un palindrome" : "Ce n'est pas un palindrome";
}

function getOutputReason(inputText, isPalindrome) {
  const reversedText = reverse(inputText);
  const comparer = isPalindrome ? "=" : NOT_EQUAL;
  return `${inputText} ${comparer} ${reversedText}`;
}

function handleInput(event) {
  const inputText = event.target.value;
  const palindrome = isPalindrome(inputText);
  outputResultElement.textContent = getOutputResult(palindrome);
  outputReasonElement.textContent = getOutputReason(inputText, palindrome);
}
