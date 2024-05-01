export function pointsForWord(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    let score = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let char of word.toLowerCase()) {
      if (vowels.includes(char)) {
        score += 1;
      } else {
        score += 2;
      }
    }
  
    // Double the points if the word is a palindrome
    if (isPalindrome(word)) {
      score *= 2;
    }
  
    return score;
  }
  
  export function isPalindrome(word) {
    const cleanedWord = word.toLowerCase().replace(/[^a-zA-Z]/g, '');
    return cleanedWord === cleanedWord.split('').reverse().join('');
  }
  
 