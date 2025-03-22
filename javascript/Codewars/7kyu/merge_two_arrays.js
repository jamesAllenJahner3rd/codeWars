/**Instructions
Output
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
Inspired by */
function mergeArrays(a, b) {
    console.log((a.length>= b.length))

    // )=>{
    //     if (a[i]!=undefined && b[i]!=undefined){
    //         return[a[i],b[i]]
    //     }else if(a[i]!=undefined){
    //         return a[i]
    //     }else if(b[i]!=undefined){
    //         return b[i]
    //     }
    //     }))
        if(a.length>= b.length){
            return a.flatMap((e,i,a)=>{
                if (a[i]!=undefined && b[i]!=undefined){
                    return[a[i],b[i]]
                }else if(a[i]!=undefined){
                    return a[i]
                }else if(b[i]!=undefined){
                    return b[i]
                }
            })
            console.log(a.flatMap((e,i,a)=>{
                if (a[i]!=undefined && b[i]!=undefined){
                    return[a[i],b[i]]
                }else if(a[i]!=undefined){
                    return a[i]
                }else if(b[i]!=undefined){
                    return b[i]
                }
                }))
        }
        if(a.length< b.length){
            console.log('b')
            return b.flatMap((e,i,a)=>{
                if (a[i]!=undefined && b[i]!=undefined){
                    return[a[i],b[i]]
                }else if(a[i]!=undefined){
                    return a[i]
                }else if(b[i]!=undefined){
                    return b[i]
                }
                console.log(b.flatMap((e,i,a)=>{
                    if (a[i]!=undefined && b[i]!=undefined){
                        return[a[i],b[i]]
                    }else if(a[i]!=undefined){
                        return a[i]
                    }else if(b[i]!=undefined){
                        return b[i]
                    }
                    }))
            })
        }
  }
  
  /**
   * prep
   * parameter two arrays, no caps. ints, no punc
   * return anarray with a cleanly shuffled version of hte arrays
   * [a,d,g,s][w,e,t,w] = [a,w,d,e,g,t,s,w]
   *[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
['a', 1,'b', 2, 'c', 3, 'd', 4, 'e', 5
]
[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f] 
expected [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, 'd' ], [ 5, 'e' ], [ 6, undefined ], [ 7, undefined ], [ 8, undefined ] ] to deeply equal [ 1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e', 6, 7, 8 ]
map  array a and b[i]
flatten the array
return the array 
b = ["o","n","f","m","b","q","y","c","u","c","t","f","u"]: expected 
[ 'o', 'o', 'n', 'n', 'f', 'f', 'm', 'm', 'b', 'b', 'q', 'q', 'y', 'y', 'c', 'c', 'u', 'u', 'c', 'c', 't', 't', 'f', 'f', 'u', 'u' ] to deeply equal 
 [ 92, 'o', 78, 'n', 77, 'f', 8, 'm', 64, 'b', 49, 'q', 16, 'y', 'c', 'u', 'c', 't', 'f', 'u' ]
   */
mergeArrays(
    [92,78,77,8,64,49,16],
    ["o","n","f","m","b","q","y","c","u","c","t","f","u"])
   