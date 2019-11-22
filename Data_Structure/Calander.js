var utility =require('../Utility/utility')

var month=utility.readLine().question('Enter the Month [1-12] : ');

var year=utility.readLine().question('Enter the year : ');

utility.displayCalender(month, year);

