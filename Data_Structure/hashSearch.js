/**
 * Hashing Function to search a Number in a slot
 * Desc ­> Create a Slot of 10 to store Chain of Numbers that belong to each Slot to efficiently 
 *        search a number from a given set of number
 * I/P ­> read a set of numbers from a file and take user input to search a number
 * Logic ­> Firstly store the numbers in the Slot. Since there are 10 Numbers divide
 *         each number by 11 and the reminder put in the appropriate slot. Create a Chain for each 
 *         Slot to avoid Collision. If a number searched is found then pop it or else push it. Use 
 *         Map of Slot Numbers and Ordered LinkedList to solve the problem. In the Figure Below, 
 *         you can see number 77/11 reminder is 0 hence sits in the 0 slot while 26/11 remainder is 
 *         4 hence sits in slot 4
 * O/P ­> Save the numbers in a file
 * 
 * @author : Aditya Gawde
 * 
 * @since : 23/11/2019
 */

var utility = require('../Utility/linkledListUtility');

//returning array of input numbers from the file into the array inputArray
var inputArray = utility.readFromFile('hashInputFile.txt');

var hashArray = [];                 // array to store hash table slots
var key;                            // slot number

// for( i=0; i<inputArray.length; i++ )
// {
//     inputArray[i] = parseInt(inputArray[i]);        // inputs parsing as integers
// }
try 
{
    for( var i=0; i<inputArray.length; i++ ){
        if(isNaN(inputArray[i]))
        {
            throw 'Your file contain Alphabets. File must contain Numbers'
            
        }
        else
        {
            inputArray[i] = parseInt(inputArray[i]);            // inputs parsing as integers
        }
            
    }
    // element of inputArray adding to the hash table
    for( var i=0; i<inputArray.length; i++ )
    {
        key = utility.calculateKey(inputArray[i]);                      // calculating the key
        
        // checking slot is empty or not
        if( hashArray[key] == undefined )
        {
            hashArray[key] = new utility.LinkedList();  // creating hashArray[key] as class likedList object 
            hashArray[key].addInSortWay(inputArray[i]);
        }
        else
        {
            hashArray[key].addInSortWay(inputArray[i])
        }
    }

    // displaying the Hash table
    console.log('\nHASH TABLE');
    for( var i=0; i<hashArray.length; i++ )
    {
        process.stdout.write(`\nSlot ${i} => `);
        if(hashArray[i] != undefined )
            hashArray[i].displayList();
    }
    console.log();

    // accepting input number to search in the hash table
    var userInput = utility.readLine().questionInt('\nEnter the number that you want to search : ');

    key = utility.calculateKey(userInput);               // calculating key of user input     

    if(hashArray[key] != undefined)
    {
        // if hash table slot is not empty the search the user Input
        if (hashArray[key].searchNode(userInput)) 
        {
            // user input found, removing from hash table
            hashArray[key].removeNode(userInput);
            console.log(`\nNode ${userInput} removed from the hash table`); 
        } 
        else
        {
            //user input not found, adding in hash table in the sorting way
            hashArray[key].addInSortWay(userInput);
            console.log(`\nNode ${userInput} added to the hash table`);
        }
    }
    else            // if hash table slot not empty
    {
        hashArray[key]=new utility.LinkedList();
        hashArray[key].addInSortWay(userInput);
        console.log(`\nNode ${userInput} added to the hash table`);
    }

    // displaying the hash table
    console.log('\nHASH TABLE');
    for( var i=0; i<hashArray.length; i++ )
    {
        process.stdout.write(`\nSlot ${i} => `);
        if(hashArray[i] != undefined )
            hashArray[i].displayList();
    }
    console.log('\n');

    // writing the hash table into the file
    var content = '';
    for( var i=0; i<hashArray.length; i++ )
    {
        if(hashArray[i] != undefined )
            content = content + hashArray[i].printList();
    }
    utility.writeIntoFile('hashInputFile.txt',content);
    console.log('Writing data into the file');
}
catch(error)
{
    console.log(error); 
} 

