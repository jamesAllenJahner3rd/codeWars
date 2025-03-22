function smash (words) {
    return words.join(' ')
 };
 /*
 parameter an array of strings, no num, no punc
 return a striong of the elements
 hello", "world"]), "hello world");
     assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
     assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
     psuedocode
     return words as a string.
 */
 /*Sentence Smash
 Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
 
 Example
 ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
 words = ['hello', 'world', 'this', 'is', 'great']
 smash(words) # returns "hello world this is great"
 Assumptions
 You can assume that you are only given words.
 You cannot assume the size of the array.
 You can assume that you do get an array.*/