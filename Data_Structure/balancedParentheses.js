/**
 * Simple Balanced Parentheses
 * Desc -> Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where 
 *         parentheses are used to order the performance of operations. Ensure parentheses 
 *         must appear in a balanced fashion.
 * I/P -> read in Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) 
 * Logic -> Write a Stack Class to push open parenthesis “(“ and pop closed parenthesis “)”. 
 *          At the End of the Expression if the Stack is Empty then the 
 * 
 * @author : Aditya Gawde
 * 
 * @since : 19/11/2019
 */

var utility = require('../Utility/stackUtility');
var stack = new utility.Stack();

// Expression string is declare
//var expressionString = '(5+6)*(7+8)/(4+3)(5+6)*(7+8)/(4+3)';

var expressionString = utility.readLine().question('\nEnter your Expression : ')

// expression string is converted into the array
var expressionArray = expressionString.split('');

console.log('The Arithmetic Expression is : '+ expressionString);

// checking for expresssion is balanced or not
if (utility.checkBalancedParentheses(expressionArray)) 
{
    console.log('$$ Arithmetic Expression is Balanced $$\n');
}    
else
{
    console.log('!! Arithmetic Expression is Not Balanced !!\n');   
}