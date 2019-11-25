/**
 * Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using the Linked List 
 * and Print the Anagrams in the Reverse Order. Note no Collection Library can be used.
 * 
 * @author : Aditya Gawde
 * 
 * @since : 22/11/2019
 */

var utility = require('../Utility/utility')

var stack3 = utility.inStackPrintAnagram();

console.log('\n\nPushing All prime Anagrams into the stack');
console.log('Print Prime Anagrams in the reverse order : \n');
//console.log(stack3.printStack());
while(!stack3.isEmpty())
{
    process.stdout.write( stack3.pop() + ' ' );
}
console.log();




 