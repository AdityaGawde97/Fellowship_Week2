/**
 * Modify the above program to store the Queue in two Stacks. Stack here is also implemented using Linked List and not
 * from Collection Library  
 * 
 * @author : Aditya Gawde
 * 
 * @since : 23/19/2020
 */

var utility = require('../Utility/utility')

// accepting month from user
var month=utility.readLine().question('Enter the Month [1-12] : ');

// accepting year from user
var year=utility.readLine().question('Enter the year : ');

try{

    
    if( isNaN(month) && isNaN(year) ) throw '\nPlease enter the input in numbers\n'
 
    var stack = utility.printCalendarViaStack(parseInt(month),parseInt(year))

    // Dequeueing the weekdays and date to print the calendar
    var i=0;
    while( !stack.isEmpty() ){
        if(i%7 === 0)
            console.log();
        process.stdout.write(stack.pop() + ' ');
        i++;
    }   
    console.log('\n'); 
         
    
}
catch(error)
{
    console.log(error);
    
}
