

module.exports=
{
    readLine()
    {
        var read = require('readline-sync');
        return read;
    },

    displayCalender(month, year) {

        // var year1, month1, x, day = 1, day1;
        // year1 = year - (14 - month) / 12;   //logic to find day of week
        // x = year1 + (year1 / 4) - (year1 / 100) + (year1 / 400);
        // month1 = month + 12 * ((14 - month) / 12) - 2;
        // day1 = (day + x + (31 * month1) / 12) % 7;
        
        var calendar=new Array(7);
        for(var i=0;i<6;i++)
        {
            calendar[i]=new Array(7);
        }
        /**
        * @description month at each position displal in outputafter printing
        */
        var months = [" ", "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
        var daysInMonth = [' ', '31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']
        var weekDays = ['S ','M ','T ','W ','Th','F ','S '];
        /**
        * @description if entered input of month is equal to 2 then isLeapYear
        *               check for entered year is leap or not .
        * @function isLeapYear()
        * @param : year and month
        */
    
        if (month == 2 && this.isLeapYear(year)) {
            days[month] = 29;
        }
        console.log();
        console.log("   " + months[month] + " " + year);
        console.log();
        //console.log(" S  M  Tu  W Th  F  S");
    
        var d = this.dayCalculate(month, year);
        /*
        for (let i = 1; i <= d; i++) {
            process.stdout.write("   ");
        }
        for (let i = 1; i <= days[month]; i++) {
            if (i <= 9) {
                process.stdout.write(" 0" + i);
            }
            else {
                process.stdout.write(" " + i);
            }
            if (((i + d) % 7 == 0) || i == days[month]) {
                console.log();
            }
            if (((i + parseInt(d)) % 7 == 0)) {
                console.log();
            }
        }
        console.log();*/
        calendar[0]=weekDays;
                for (let i = 0; i < d; i++)
                    calendar[1][i]="  ";
                var row=1;
                var col=d;
                for (var i = 1; i <= daysInMonth[month]; i++)
                {
                    if(col==7)
                    {                        
                        col=0;
                        row++;
                    }
                    if (i <= 9)
                        calendar[row][col++]='0'+i;
                    else
                        calendar[row][col++]=i;
                }
                console.log(calendar.join('\n'));
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

    dayCalculate(month, year) 
    {
        var y = year - Math.floor((14 - month ) / 12);
        var x = y + Math.floor(y / 4) - Math.floor(y/100) + Math.floor(y/400);
        var m = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d = Math.floor(1 + x + (31 * m) / 12)  % 7;
        return d;
    },

    numberOfBTS(nodes)
    {
        var numberOfTrees = Math.floor((this.factorial(2 * nodes)) / (this.factorial(nodes + 1)) * (this.factorial(nodes))); 
        console.log("Number of Trees " + numberOfTrees);
         
        return numberOfTrees;
    },

    factorial(n) 
    { 
        var fact = 1; 
        for (var i = 1; i <= n; i++) 
        { 
            fact *= i; 
            
        } 
        
        return fact;
    },

    storeIn2DArray(primeNumbers,primeArray) {
        var range = 100,i=0,j=1;
        for(let p=0; p<primeNumbers.length; p++)
        {
            if(primeNumbers[p]<range)
            {
                primeArray[i][j] = primeNumbers[p];
                j++;
            }
            else{
                i=i+1;
                j=1;
                range = range+100;
                primeArray[i][j] = primeNumbers[p];
            }
        }
        return primeArray;
    }
    
}