A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

/*
* convert all uppercase letters to lowrcase
* removes all non-alphanumeric characters
    --aka remove except letters and numbers
* alphanumeric characters include letters & numbers
* "A man, a plan, a canal: Panama"
    aman   nama 
    aplan  nalp
    acanal lanaca
    Panama amanaP
    namanalplanaca
    amanaplanacanalpanama
*/
var isPalindrome = function(s) {
    var removeChar = s.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    var verifyPalindrome = removeChar.split('').reverse().join('');
   
    return removeChar === verifyPalindrome;

};
