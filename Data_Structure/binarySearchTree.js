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
function factorial(n) 
{ 
    var fact = 1; 
    for (var i = 1; i <= n; ++i) 
    { 
        fact *= i; 
    } 
    return fact;
}
function numberOfBTS(nodes)
{
    var numberOfTrees = Math.floor( (factorial(2 * nodes) ) / (factorial(nodes + 1) * factorial( nodes )));  
    return numberOfTrees;
}

var utility = require('../Utility/utility');
var testCases = utility.readLine().questionInt("\nEnter the total number of testcases : ");

while (testCases > 0) {
    let totalNodes = utility.readLine().questionInt("\nEnter total number of nodes : ");
    let totalTree = numberOfBTS(parseInt(totalNodes));
    console.log('\n' + totalTree + ' Trees are generated.');
    testCases--;
}
console.log('Ends.........\n');