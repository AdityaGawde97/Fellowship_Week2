/**
 * Write a program Calendar.java that takes the month and year as command­line arguments and prints the 
 * Calendar of the month. Store the Calendar in an 2D Array, the first dimension the week of the month 
 * and the second dimension stores the day of the week. Print the result as following.
 * 
 * @author : Aditya Gawde
 * 
 * @since : 23/11/2019
 */
var utility =require('../Utility/utility')

// accepting month from user
var month=parseInt(utility.readLine().question('Enter the Month [1-12] : '));

// accepting year from user
var year=parseInt(utility.readLine().question('Enter the year : '));

try{

    if(!isNaN(month) && !isNaN(year))
    {

        // returning array of calender in array calender
        var calendar = utility.displayCalendar(month, year);

        // printing the calender
        for(var i=0;i<6;i++){
            for(var j=0;j<7;j++){
                if(calendar[i][j] == undefined)
                    process.stdout.write(' ' + ' ');
                else
                    process.stdout.write(calendar[i][j] + ' ');
            }
            console.log();
        }
        console.log();
    }
    else
        throw '\nPlease enter the input in numbers\n'
}
catch(error)
{
    console.log(error);
    
}
