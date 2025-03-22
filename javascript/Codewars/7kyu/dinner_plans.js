/**
 * Two samurai generals are discussing dinner plans after a battle, but they can't seem to agree.
The discussion gets heated and you cannot risk favoring either of them as this might damage your political standing with either of the two clans the samurai generals belong to. Thus, the only thing left to do is find what the common ground of what they are saying is.

Compare the proposals with the following function:

function commonGround(s1, s2)
The parameters s1 and s2 are the strings representing what each of the generals said. You should output a string containing the words in s1 that also occur in s2.

Each word in the resulting string shall occur once, and the order of the words need to follow the order of the first occurence of each word in s2.

If they are saying nothing in common, kill both samurai and blame a ninja. (output "death")

StringsArraysFundamentals
 */
/**
 * prep
 * parameters two strings pun? nums? special char?
 * return a string with everything that is in both strings. no dupl, in order first found. else output death.
 *how are you, i have you > you
 *do you like pizza, I need sweets > death
 Pizza is good, good pizza is > pizza is good
 slit s1 into an array of words
 for each word in s1 search s2
    if you find it return it to the output
if output is empty return death.
else return output
*/
function commonGround(s1, s2){
    let s2Array = s2.split(" ");
    let output =''
    s2Array.forEach((e,i,a)=>{
        (s1.includes(e) && !output.includes(e))? output+= e+" ": console.log("not e") 
    })
    if (output.length === 0){
        console.log("death") 
        return 'death'
    }
    output = output.slice(0,output.length-1)
    console.log(output) 
      return output;
    }
    commonGround("eat chicken", "eat chicken and rice")