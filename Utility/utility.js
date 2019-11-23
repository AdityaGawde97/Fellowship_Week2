

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

        var months = [" ", "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
        var daysInMonth = [' ', '31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']
        var weekDays = [' S ','M ','T ','W ','Th','F ','S '];
    
        if (month == 2 && this.isLeapYear(year)) {
            days[month] = 29;
        }
        console.log();
        console.log("   " + months[month] + " " + year);
        console.log();

        // retuning day by dayCalculate() function
        var day = this.dayCalculate(month, year);

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
        return calendar;

            
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
        var y = year - Math.floor((14 - month ) / 12);
        var x = y + Math.floor(y / 4) - Math.floor(y/100) + Math.floor(y/400);
        var m = month + 12 * Math.floor((14 - month) / 12) - 2;
        var day = Math.floor(1 + x + (31 * m) / 12)  % 7;
        return parseInt(day);
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
    }
    
}