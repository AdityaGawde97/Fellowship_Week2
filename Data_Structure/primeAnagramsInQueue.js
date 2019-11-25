/**
 * Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Queue using the Linked List 
 * and Print the Anagrams from the Queue. Note no Collection Library can be used.
 * 
 * @author : Aditya Gawde
 * 
 * @since : 22/11/2019
 */
var utility = require('../Utility/utility')
var queue3 = utility.inQueuePrintAnagram();

console.log('\n\nAfter Enqueueing All prime Anagrams into the Queue : \n');
//console.log(queue3.printQueue());
while(!queue3.isEmpty())
{
    process.stdout.write( queue3.deQueue() + ' ' );
}
console.log('\n');
