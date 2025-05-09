
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
function snakesOn(aPlane) {
    let snakes = new Map ();
     let strings =''
     aPlane.forEach((string) => strings = strings.concat(string))
     for(let i=0; i< strings.length; i++){
       snakes.set(strings[i], true)
     }
     if(snakes.has('_') === true){
        console.log('_ true ', snakes.entries())
     return (snakes.size -2)
     }
     console.log('_')
     return snakes.size-1
   }