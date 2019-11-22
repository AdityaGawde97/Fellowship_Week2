/**
 * Take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range. Store the prime numbers in a 2D Array, the 
 * first dimension represents the range 0­100, 100­200, and so on. While the second dimension represents the prime numbers 
 * in that range
 * 
 * @author : Aditya Gawde
 * 
 * @since : 22/11/2019
 
*/

var utility1 = require('../../Fellowship_Week1/Utility/Utility');
var utility2 = require('../Utility/utility')

var k=0;
var primeArray = [['000-100 '],['100-200 '],['200-300 '],['300-400 '],['400-500 '],['500-600 '],['600-700 '],['700-800 '],['800-900 '],['900-1000']];
var primeNumbers = new Array();
for(var i=0;i<1000;i++){
    if(utility1.checkPrime(i)){
        primeNumbers[k++]=i;
    }
}

var finalArray=utility2.storeIn2DArray(primeNumbers,primeArray)
for(var i=0;i<finalArray.length;i++){
    for(var j=0;j<finalArray[i].length;j++){
        process.stdout.write(finalArray[i][j]+' ');
    }
    console.log();
    
}






