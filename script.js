function isPalindrome(word) {
  // let reversedWord = "";
  // for (let i = word.length - 1; i >= 0; i--) {
  //     reversedWord += word[i];
  // }
  // console.log(reversedWord)
  // return word === reversedWord;

  const orgString = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(orgString);

  const reversedWord = orgString.split("").reverse().join("");
  console.log(reversedWord);
  return orgString === reversedWord;
}

function palindromeChecker() {
  const text = document.getElementById("inoutText").value;
  const result = document.getElementById("result");
  if (text === "") {
    result.innerText = "Please enter a word";
  } else if (isPalindrome(text)) {
    result.innerText = "It's a palindrome";
  } else {
    result.innerText = "It's not a palindrome";
  }
}

document
  .getElementById("checkButton")
  .addEventListener("click", palindromeChecker);
