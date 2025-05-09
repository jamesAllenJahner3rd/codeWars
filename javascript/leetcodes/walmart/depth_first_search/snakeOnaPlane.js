
/**return a int 
 * parameters strings
 * 
 *      '__AAAAA__A'
        '__A___A__A'
        'K_____AAAA'
        'K_DDDD____'
        'K____DDDD_'
        3
        '_A_AAAAA__'.split(''),
        '_AA____AAA'.split(''),
        'D_AA_____A'.split(''),
        'DD_AAAAA_A'.split(''),
        '_D_____AAA'.split('')
        2
        'AAA__AAAAA'.split(''),
        'A___AA___A'.split(''),
        'A_AAA____A'.split(''),
        'A______AAA'.split(''),
        'AAAAAAAA__'.split('')
        1
        search  unqie letters
        map  set  each letter in to the map 
        then return the map. size

*/
// function snakesOn(aPlane) {
//     let snakes = new Map ();
//      let strings =''
//      aPlane.forEach((string) => strings = strings.concat(string))
//      for(let i=0; i< strings.length; i++){
//        snakes.set(strings[i], true)
//      }
//      if(snakes.has('_') === true){
//         console.log('_ true ', snakes.entries())
//      return (snakes.size -2)
//      }
//      console.log('_')
//      return snakes.size-1
//    }
/**To solve this Snakes on a Plane kata, you need to count the number of distinct snakes present on the grid. Each snake is represented by a unique character, and they move horizontally or vertically.
Approach
- Traverse the grid to identify unique snake characters.
- Track visited cells to ensure each snake is counted only once.
- Use depth-first search (DFS) or breadth-first search (BFS) to follow the snake's path.
- Count the distinct snakes that exist in the grid.


 */
   function snakesOn(plane) {
    let rows = plane.length;
    let cols = plane[0].length;
    let visited = new Set();
    let snakeCount = 0;

    function dfs(r, c, char) {
        let stack = [[r, c]];
        while (stack.length) {
            let [x, y] = stack.pop();
            let key = `${x},${y}`;
            if (x < 0 || y < 0 || x >= rows || y >= cols || visited.has(key) || plane[x][y] !== char) continue;
            visited.add(key);
            stack.push([x + 1, y]);
            stack.push([x - 1, y]);
            stack.push([x, y + 1]);
            stack.push([x, y - 1]);
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let key = `${r},${c}`;
            if (plane[r][c] !== '_' && !visited.has(key)) {
                snakeCount++;
                dfs(r, c, plane[r][c]);
            }
        }
    }

    return snakeCount;
}