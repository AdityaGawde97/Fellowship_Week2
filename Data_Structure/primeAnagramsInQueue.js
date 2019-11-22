/**
 * Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Queue using the Linked List 
 * and Print the Anagrams from the Queue. Note no Collection Library can be used.
 * 
 * @author : Aditya Gawde
 * 
 * @since : 22/11/2019
 */
var utility1 = require('../Utility/queueUtility')
var utility2 = require('../../Fellowship_Week1/Utility/Utility')
var queue = new utility1.Queue();
var primeAnagramArray = utility2.printAnagram();
console.log('\nBefore Enqueueing prime Anagrams to the Queue : ');

primeAnagramArray.forEach(function(item){process.stdout.write(item + ' ')});
for( i=0; i<primeAnagramArray.length; i++ )
{
    queue.enQueue(primeAnagramArray[i])
}
console.log('\n\nAfter Enqueueing All prime Anagrams into the Queue : ');
console.log(queue.printQueue());
