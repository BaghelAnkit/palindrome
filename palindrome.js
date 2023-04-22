function palindrome(string) {
    const reverseString = string.split('').reverse().join('')
    if (string == reverseString) {
        console.log("it is a palindrome")
    } else {
        console.log("not a palindrome")
    }
}
const string = 'madam';
palindrome(string);