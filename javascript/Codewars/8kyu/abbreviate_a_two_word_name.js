/**Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */
function abbrevName(name) {
    const initials = new TheAbbreviator(name);
    return initials.run();
  }

  class TheAbbreviator {
    constructor(name) {
      this._name = name;
      this._nameArray = [];
      this._outputArray = [];
      this._output = "";
    }

    // Split the name into an array of words
    arrayifier() {
      this._nameArray = this._name.split(' ');
    }

    // Find the first letter of each word and push it to _outputArray
    initialFinder() {
      this._nameArray.forEach((e) => {
        this._outputArray.push(e.charAt(0));
      });
    }

    // Join the initials with a dot separator
    initialize() {
      this._output = this._outputArray.join('.');
    }
    // Capitalize the initials
    capitalize(){
      this._output = this._output.toUpperCase();
    }

    // Execute the steps to get the abbreviation
    run() {
      this.arrayifier();
      this.initialFinder();
      this.initialize();
      this.capitalize();
      return this._output
    }
  }

  /*prep
  parameter a full name
  return the first letters of the name separated by a '.'

    "Sam Harris"), "S.H");
   "Patrick Feenan"), "P.F");
   "Evan Cole"), "E.C");

  separate the names into and array
  get the first letter of the names.
  add the letters to a string plus a period.
  */