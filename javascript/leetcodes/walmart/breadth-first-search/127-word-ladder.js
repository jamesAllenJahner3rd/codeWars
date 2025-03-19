// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

// Constraints:

// 1 <= beginWord.length <= 10
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(wordList.includes(endWord)!= true){
            return 0
        }
    let currentWord = beginWord
    let nextWord =wordList[0]
    let n = 3
    console.log(n)
    for(let i = 0; i<= wordList.length;i++){
        
        nextWord = wordList[i]
        let stats = [0,0]
        if (currentWord === nextWord){ 
            n -=1;
            console.log(n)
        }
        for(let letter in wordList[i]){
             
            let currentLetter =currentWord[i]
           // console.log(letter,currentWord[letter], nextWord[letter])
            currentWord[letter] === nextWord[letter]?  null : stats[0] +=1
            endWord[letter] === nextWord[letter]?  null : stats[1] +=1
           console.log(n)
        }
        if (stats[1] === 1)  {
            
            return n
        };
        if (stats[0] === 1)  {
            currentWord = nextWord;
            n+=1;
        }else {
            return 0
        };
        
    }
};
//ladderLength ("hit",  "cog",  ["hot","dot","dog","lot","log","cog"])
ladderLength('a','c',['a','b','c'])
/*
para a string , string ,array is string
return  5
10 letter  word at most
up to 5000
no cap no -or other

a => i > 1 =>1
get =>  net, not, hot, hit => hit
hard=> apple, =>0

array with 2 element one to track  the different between the current word and next word one to track the 
i could skip to the length to the word and then move on, but i'm assuming that the could be a  disconnect.
let's compare the letter and verify only one changes with each word and check the difference to the final word.
when its 1 letter trigger the return
*/