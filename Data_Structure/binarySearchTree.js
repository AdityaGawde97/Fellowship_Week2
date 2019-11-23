/*var utility = require('../Utility/utility')

var testCases = utility.readLine().question("\nEnter the total number of testcases : ");

while (testCases > 0) {
    var totalNodes = utility.readLine().question("\nEnter total number of nodes : ");
    var totalTree = numberOfBTS(totalNodes);
    console.log('\n' + totalTree + ' Trees are generated.');
    testCases--;
}
console.log('Ends.........');



*/   

/**
 * @description : calculation factorial
 * @param {calculation factorial of number n} number
 * @returns : factorial of the number 
 */
function factorial(number) 
{ 
    var fact = 1; 
    for (var i = 1; i <= number; ++i) 
    { 
        fact *= i; 
    } 
    return fact;
}

/**
 * @description : function to calculate number
 * @param {number of nodes of binary search tree} nodes 
 * @returns : number of nodes
 */
function numberOfBTS(nodes)
{
    var numberOfTrees = Math.floor( (factorial(2 * nodes) ) / (factorial(nodes + 1) * factorial( nodes )));  
    return numberOfTrees;
}

var utility = require('../Utility/utility');

// input accepting from the user to run testcases number of times
var testCases = utility.readLine().questionInt("\nEnter the total number of testcases : ");

while (testCases > 0) {

    let totalNodes = parseInt(utility.readLine().questionInt("\nEnter total number of nodes : "));
    let totalTreeNodes = numberOfBTS(totalNodes);
    console.log('\n' + totalTreeNodes + ' Trees are generated.');
    testCases--;
}
console.log('\nEnds.........\n');