// Palindrome Permutation
// A palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam
// A string permutation is an arrangement or order of its characters.
//     Given a string, determine if there is a permutation which is a palindrome or not.
//     Example 1:
// Input: "code"
// Output: Palindrome permutation not possible
// Example 2:
// Input: "aab"
// Output: Palindrome permutation possible
// Example 3:
// Input: "carerac"
// Output: Palindrome permutation possible
// Note:- canPermutePalindrome f

function isPalindrome(string) {
    if (string === null || string === undefined) {
        return false;
    }
    string = string.replace(/[^0-9a-z]/gi, "").toLowerCase();

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function canPermutePalindrome(string) {
    if (isPalindrome(string)) {
        return "Palindrome permutation possible";
    }

    return "Palindrome permutation not possible";
}



console.log(canPermutePalindrome(null)); // false
console.log(canPermutePalindrome("")); // true
console.log(canPermutePalindrome(undefined)); // false
console.log(canPermutePalindrome("race car")); // true
console.log(canPermutePalindrome("A man, a plan, a canal. Panama")); // true
console.log(canPermutePalindrome("never odd or even")); // true
console.log(canPermutePalindrome("almostomla")); // false
console.log(canPermutePalindrome("My age is 0, 0 si ega ym.")); // true
console.log(canPermutePalindrome("1 eye for of 1 eye.")); // false
console.log(canPermutePalindrome("0_0 (: /-\\ :) 0–0")); // true
