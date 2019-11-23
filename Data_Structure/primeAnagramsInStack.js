/**
 * Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using the Linked List 
 * and Print the Anagrams in the Reverse Order. Note no Collection Library can be used.
 * 
 * @author : Aditya Gawde
 * 
 * @since : 22/11/2019
 */

var utility1 = require('../Utility/stackUtility')
var utility2 = require('../../Fellowship_Week1/Utility/Utility')
var stack = new utility1.Stack();
var primeAnagramArray = utility2.printAnagram();
console.log('\nBefore Pushing prime Anagrams to the Stack : \n');

primeAnagramArray.forEach(function(item){process.stdout.write(item + ' ')});
for( i=0; i<primeAnagramArray.length; i++ )
{
stack.push(primeAnagramArray[i])
}
console.log('\n\nPushing All prime Anagrams into the stack');
console.log('Print Prime Anagrams in the reverse order : \n');
console.log(stack.printStack());

 