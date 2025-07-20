/**28. Find the Index of the First Occurrence in a String
Solved
Easy
Topics
premium lock icon
Companies
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

  */
 /**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 param 2 strings return string 
 haystack split it at the needle then the length of the first array should be the index
 return the index*/
var strStr = function(haystack, needle) {
    let sweeper = haystack.split(`${needle}`)
    return sweeper[0].length< haystack.length? sweeper[0].length :-1
};