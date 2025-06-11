/**20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */
/**
 * param string of parentheses
 * return boolean if the parentheses are valid
 * we are looking for a pair of sybloms so two-pointer technque should be 
 * 
 * 
 * {} true
 * {{{{{{}}}}}} true
 * {}} false
 * }}false
 *  a pointer to take the open
* a point tto iterate the string searching for the close
if we find a close before find a open fail
iff we find a close of the wrong type fail

 */