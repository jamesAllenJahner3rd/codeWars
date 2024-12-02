/**
 * In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.
 */
/**
 * prep
 * parameter a array of number, will there are neg, 0, float,s, third
 * return a array in in order of most repeats. seconndly higher number
 * 545454455 >[5,5,5,5,5,4,4,4,4]
 * [2,3,4]> [2,3,4]
 * [552223334]> [2,2,2,3,3,3,5,5,4]
 */
function solve(arr) {
  console.log(arr);
  const frequencyMap = new Asorter(arr);
  let test =frequencyMap.start();
  console.log(test);
  return test
  //console.log('test',arr)
}
class Asorter {
  constructor(aArray) {
    let anArray = aArray;
    this.inputArray = function () {
      return anArray;
    };
    this.map = {};
  }
  start() {
    this.mapper();
    this.sorter();
  }
  mapper() {
    this.inputArray().forEach((num, i, a) => {
      this.map[num] ? this.map[num]++ : (this.map[num] = 1);
    });
    //console.log("this.map",this.map)
  }
  sorter() {
    let groupedByValue = Object.groupBy(
      Object.entries(this.map),
      ([, value]) => value
    );
    let result = [];
    Object.keys(groupedByValue)
      .sort((a, b) => b - a)
      .forEach((freq) => {
        let items = groupedByValue[freq]
          .map(([key]) => parseInt(key))
          .sort((a, b) => a - b);
        items.forEach((item) => {
          result.push(...Array(parseInt(freq)).fill(item));
        });
      });
      console.log(result);
    return result;
  }
}

solve([2, 3, 5, 3, 7, 9, 5, 3, 7]);
solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]);
solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4]);
solve([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]);
solve([4, 9, 5, 0, 7, 3, 8, 4, 9, 0]);
