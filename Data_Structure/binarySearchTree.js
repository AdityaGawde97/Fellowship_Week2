/**
 * Number of Binary Search Tree
 * 
 * @author : Aditya Gawde
 * 
 * @since : 22/11/2019
 * 
 */

var utility = require('../Utility/utility');

// input accepting from the user to run testcases number of times
var testCases = utility.readLine().questionInt("\nEnter the total number of testcases : ");

while (testCases > 0) {

    let totalNodes = parseInt(utility.readLine().questionInt("\nEnter total number of nodes : "));
    let totalTreeNodes = utility.numberOfBTS(totalNodes);
    console.log('\n' + totalTreeNodes + ' Trees are generated.');
    testCases--;
}
console.log('\nEnds.........\n');