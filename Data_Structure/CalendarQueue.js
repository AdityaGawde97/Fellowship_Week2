/**
 * Create the Week Object having a list of WeekDay objects each storing the day (i.e S,M,T,W,Th,..) and the Date (1,2,3..)
 * The WeekDay objects are stored in a Queue implemented using Linked List. Further maintain also a Week Object in a Queue 
 * to  finally display the Calendar  Note ­ If a particular day has no date then the date is set as empty string and add 
 * it to queue.  
 * 
 * @author : Aditya Gawde
 * 
 * @since : 23/19/2020 
 */

var utility =require('../Utility/utility')

// accepting month from user
var month=utility.readLine().question('Enter the Month [1-12] : ');

// accepting year from user
var year=utility.readLine().question('Enter the year : ');

try{

    
    if( isNaN(month) && isNaN(year) ) throw '\nPlease enter the input in numbers\n'
 
    var queue2 = utility.displayCalendarViaQueue(parseInt(month),parseInt(year))

    // Dequeueing the weekdays and date to print the calendar
    var i=0;
    while( !queue2.isEmpty() ){
        if(i%7 === 0)
            console.log();
        process.stdout.write(queue2.deQueue() + ' ');
        i++;
    }   
    console.log('\n'); 
         
    
}
catch(error)
{
    console.log(error);
    
}
