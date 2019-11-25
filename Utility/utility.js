var util = require('../../Fellowship_Week1/Utility/Utility')
var QUtil = require('../Utility/queueUtility');
var stackUtil = require('../Utility/stackUtility')

module.exports=
{
    readLine()
    {
        var read = require('readline-sync');
        return read;
    },


    /**
     * @description : display the calendar
     * @param {month} month 
     * @param {year} year 
     * @returns : calendar array
     */
    displayCalendar(month, year) 
    {
        // initializing calender Array
        var calendar=new Array(7);
        for(var i=0;i<6;i++)
        {
            calendar[i]=new Array(7);
        }

        // months array
        var months = [" ", "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
        // array of number of days in month
        var daysInMonth = [' ', '31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']
        // array week days
        var weekDays = [' S ','M ','T ','W ','Th','F ','S '];
    
        // if month is February the check the year is leap or not
        if (month == 2 && this.isLeapYear(year)) {
            daysInMonth[month] = 29;
        }
        console.log();
        console.log("   " + months[month] + " " + year);
        console.log();

        // retuning day by dayCalculate() function
        var day = this.dayCalculate(month, year);

        // adding week days and dates in array
        calendar[0]=weekDays;
        for (let i = 0; i < day; i++)
            calendar[1][i]="  ";
        var row=1;
        var col=day;
        for (var i = 1; i <= daysInMonth[month]; i++)
        {
            if(col==7)
            {                        
                col=0;
                row++;
            }
            if (i < 10)
                calendar[row][col++]=' '+i;
            else
                calendar[row][col++]=''+i;
                
        }
        //console.log(calendar.join('\n'));
        return calendar;                    // retuning the array
    },


    /**
    * @description check if entered year is leap or not
    * @param year  
    * @function isLeapYear
    */
    isLeapYear(year) {
        if (year % 4 === 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
        }
        return false;
    },


    /**
     * @description : calculate the days
     * @param {month} month 
     * @param {yaer} year 
     * @returns : day
     */
    dayCalculate(month, year) 
    {
        var yTemp = year - Math.floor((14 - month ) / 12);
        var xTemp = yTemp + Math.floor(yTemp / 4) - Math.floor(yTemp/100) + Math.floor(yTemp/400);
        var mTemp = month + 12 * Math.floor((14 - month) / 12) - 2;
        var day = Math.floor(1 + xTemp + (31 * mTemp) / 12)  % 7;
        return parseInt(day);
    },


    /**
     * @description : display the calendar using Queue
     * @param {month} month 
     * @param {year} year 
     * @returns : queue object
     */
    displayCalendarViaQueue(month, year) 
    {
    
        var queue2 = new QUtil.Queue();

        // array of months
        var months = [" ", "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        // array of number of days in month
        var daysInMonth = [' ', '31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
        // array of week days
        var weekDays = [' S ','M ','T ','W ','Th','F ','S '];
        
        // if month is february then check year is leap year or not
        if (month == 2 && this.isLeapYear(year)) {
            daysInMonth[month] = 29;
        }
        console.log();
        console.log("   " + months[month] + " " + year);
        console.log();

        // retuning day by dayCalculate() function
        var day = this.dayCalculate(month, year);

        // adding week days and dates in queue
        for (let i = 0; i < weekDays.length; i++) {
            queue2.enQueue(weekDays[i]);
        }
        for (let i = 0; i < day; i++)
            queue2.enQueue("  ");
        for (var i = 1; i <= daysInMonth[month]; i++)
        {

            if (i < 10)
                queue2.enQueue(' '+i);
            else
                queue2.enQueue(''+i);
                
        }
        return queue2;                          // returning the queue object
    },


    /**
     * @description : display the calendar using stack
     * @param {month} month 
     * @param {year} year 
     * @returns : stack object
     */
    printCalendarViaStack(month, year) 
    {
        var stack1 = new stackUtil.Stack();              // stack object 1
        var stack2 = new stackUtil.Stack();              // stack object 2

        // array of months
        var months = [" ", "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
        // array of number of days in the month
        var daysInMonth = [' ', '31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']
        var weekDays = [' S ','M ','T ','W ','Th','F ','S '];
        
        // if month is february then check year is leap year or not
        if (month == 2 && this.isLeapYear(year)) {
            daysInMonth[month] = 29;
        }
        console.log();
        console.log("   " + months[month] + " " + year);
        console.log();

        // retuning day by dayCalculate() function
        var day = this.dayCalculate(month, year);

        // pushing week days and dates in the stack
        for (let i = 0; i < weekDays.length; i++) {
            stack1.push(weekDays[i]);
        }
        for (let i = 0; i < day; i++)
            stack1.push("  ");
        for (var i = 1; i <= daysInMonth[month]; i++)
        {

            if (i < 10)
                stack1.push(' '+i);
            else
                stack1.push(''+i);     
        }

        // poping first stack and pushing it to the second stack
        while (!stack1.isEmpty()) {
            stack2.push(stack1.pop())
        }

        return stack2;                      // returning the stack object
    },


    /**
     * @description : calculation factorial
     * @param {calculation factorial of number n} number
     * @returns : factorial of the number 
     */
    factorial(number) 
    { 
        var fact = 1; 
        for (var i = 1; i <= number; ++i) 
        { 
            fact *= i; 
        } 
        return fact;
    },


    /**
     * @description : function to calculate number
     * @param {number of nodes of binary search tree} nodes 
     * @returns : number of nodes
     */
    numberOfBTS(nodes)
    {
        var numberOfTrees = Math.floor( (this.factorial(2 * nodes) ) / (this.factorial(nodes + 1) * this.factorial( nodes )));  
        return numberOfTrees;
    },


    /**
     * @description : to display 2D array of primes numbers
     * @param {1D array of primes number of arrays} primeNumbers 
     * @param {2D for storing primes number with labeling} primeArray 
     * @returns : 2D array of prime numbers
     */
    storeIn2DArray(primeNumbers,primeArray) {
        var range = 100,i=0,j=1;
        for(let p=0; p<primeNumbers.length; p++)
        {
            if( primeNumbers[p] < range )
            {
                primeArray[i][j] = primeNumbers[p];
                j++;
            }
            else{
                i=i+1;
                j=1;
                range = range+100;                  // incrementing range by 100
                primeArray[i][j] = primeNumbers[p];
            }
        }
        return primeArray;
    },


    /**
     * @description : check prime number are anagram or not
     * @returns : prime anagram array
     */
    printAnagram(){

        var k = 0;
        var primeAnagramArray = new Array();
        var tempArray = new Array()
        for(let i=0 ;i<=1000;i++){
            tempArray[i]=false;
        }
        for( i=0; i<=1000; i++ )
        {
            if( util.checkPrime(i))
            {
                for( j=i+1; j<=1000; j++)
                {
                    if( util.checkPrime(j) )
                    {
                        if( util.checkAnagramForInteger( i, j ) )
                        {
                            if(!tempArray[i]){
                                tempArray[i]=true;
                                primeAnagramArray[k++] = i;
                                primeAnagramArray[k++] = j;
                            }
                        }   
                    }
                }
            }
        }
        return primeAnagramArray;
    },


    /**
     * @description : pushing prime anagram number into the stack
     * @returns : stack object
     */
    inStackPrintAnagram(){

        var stack3 = new stackUtil.Stack();
        var tempArray = new Array()
        for(let i=0 ;i<=1000;i++){
            tempArray[i]=false;
        }
        for( var i=0; i<=1000; i++ )
        {
            if( util.checkPrime(i))
            {
                for( var j=i+1; j<=1000; j++)
                {
                    if( util.checkPrime(j) )
                    {
                        if( util.checkAnagramForInteger( i, j ) )
                        {
                            if(!tempArray[j]){
                                tempArray[j]=true;
                                stack3.push(i);
                                stack3.push(j);
                            }
                        }   
                    }
                }
            }
        }
        return stack3;
    },


    /**
     * @description : Enqueuing prime anagram number into the Queue
     * @returns : Queue object
     */
    inQueuePrintAnagram(){

        var queue3 = new QUtil.Queue();
        var tempArray = new Array()
        for(let i=0 ;i<=1000;i++){
            tempArray[i]=false;
        }
        for( var i=0; i<=1000; i++ )
        {
            if( util.checkPrime(i))
            {
                for( var j=i+1; j<=1000; j++)
                {
                    if( util.checkPrime(j) )
                    {
                        if( util.checkAnagramForInteger( i, j ) )
                        {
                            if(!tempArray[j]){
                                tempArray[j]=true;
                                queue3.enQueue(i);
                                queue3.enQueue(j);
                            }
                        }   
                    }
                }
            }
        }
        return queue3;
    }
}