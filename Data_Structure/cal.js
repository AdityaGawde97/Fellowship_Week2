var year = 2019, month=11

var year1, month1, x, day = 1, day1;
year1 = year - (14 - month) / 12;   //logic to find day of week
x = year1 + (year1 / 4) - (year1 / 100) + (year1 / 400);
month1 = month + 12 * ((14 - month) / 12) - 2;
day1 = (day + x + (31 * month1) / 12) % 7;

var monthName = [ "January", "February", "March", "April", "May", "June", "July", "August", "September",
"October", "November", "December" ];
var monthDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
var monthDay = 0;
for (var i = 0; i < monthDays.length; i++) 
{
    if (i == month - 1) 
    {
        monthDay = monthDays[i];
    }
}
var totalDays = new Array(6);
for(i=0;i<6;i++)
{
    totalDays[i] = new Array(7);
}

if ( month == 2) 
{
    monthDay = 29;
}
var z = 1;
for (var i = 0; i < 6; i++) 
{
    for (var j = 0; j < 7; j++)
    {
        if (i == 0 && j < day1) 
        {
            totalDays[i][j] = -1;
        } 
        else if (z <= monthDay) 
        {
            totalDays[i][j] = z;
            z++;
        } 
        else 
        {
            totalDays[i][j] = -1;
        }
    }
}
for (var i = 0; i < 12; i++) 
{
    if (month == i + 1) 
    {
        process.stdout.write(monthName[i] + " " + year);
    }
}
console.log();

var dayName = [ "S", "M", "T", "W", "T", "F", "S" ];
for (var i = 0; i < 7; i++) 
{
    process.stdout.write(dayName[i] + "  ");
}
console.log();

for (var i = 0; i < 6; i++) 
{
    for (var j = 0; j < 7; j++)
    {
        if (totalDays[i][j] != -1) 
        {
            if (totalDays[i][j] < 10)
                process.stdout.write(totalDays[i][j] + "  ");
            else
                process.stdout.write(totalDays[i][j] + " ");
        }
        else
            process.stdout.write("   ");
    }
}
console.log(totalDays);

