function likes(names) {
    const thumbsUp = new TheLikeinator(names);
    return thumbsUp.print();
  }
  
  class TheLikeinator {
    constructor(words) {
      this._words = words;
      this._length = words.length;
      this._classes = [Words0, Words1, Words2, Words3, Words4];
      console.log(words, words.length);
    }
  
    get words(){
      return this._words
    }
    get length(){
       return this._length
    }
    get classes(){
      return this._classes
    }
    print = () => new this._classes[Math.min(this._length,4)](this._words).addlikes();
    
  }
  class Words0 extends TheLikeinator{
     constructor(words) {
      super(words);
    }
   addlikes = () => 'no one likes this'  
  }
  class Words1 extends TheLikeinator{
     constructor(words) {
      super(words);
    }
   addlikes = () => `${this._words[0]} likes this`  
  }
  class Words2 extends TheLikeinator{
    constructor(words) {
      super(words);
    }
    addlikes = () => `${this._words[0]} and ${this._words[1]} like this`
  }
  class Words3 extends TheLikeinator{
     constructor(words) {
      super(words);
    }
   addlikes = () => `${this._words[0]}, ${this._words[1]} and ${this._words[2]} like this`
  }
  class Words4 extends TheLikeinator{
     constructor(words) {
      super(words);
    }
   addlikes = () => `${this._words[0]}, ${this._words[1]} and ${this._length - 2} others like this`
  }
  /**Instructions
Output
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases. */