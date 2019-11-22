/**
 * Palindrome-Checker\
 * Desc -> A palindrome is a string that reads the same forward and backward, for
 *         example, radar, toot, and madam. We would like to construct an algorithm 
 *         to input a string of characters and check whether it is a palindrome.
 * I/P -> Take a String as an Input 
 * Logic -> The solution to this problem will use a deque to store the characters 
 *          of the string. We will process 
 *          the string from left to right and add each character to the rear of 
 *          the deque. 
 * O/P -> True or False to Show if the String is Palindrome or not.
 * 
 * @author : Aditya Gawde
 * 
 * @since : 20/11/2019
 */

var utility = require('../Utility/dequeUtility');
var dq = new utility.Deque();

var input = utility.readLine().question('\nEntet the String : ');

var stringArray = input.split('');

for(var i = 0; i < stringArray.length; i++)
{
    dq.insertRear(stringArray[i]);
}

if ( dq.printForword() === dq.printBackword() ) {
    console.log(`\nEntered Strings ${input} is Palindrome\n`);
} 
else {
    console.log(`\nEntered Strings ${input} is Not a Palindrome\n`);
    
}


