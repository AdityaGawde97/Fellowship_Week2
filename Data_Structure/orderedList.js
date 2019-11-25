/**
 * Ordered List
 * Desc -> Read .a List of Numbers from a file and arrange it ascending Order in a Linked List. 
 * Take user input for a number, if found then pop the number out of the list else insert the 
 * number in appropriate position
 * I/P -> Read from file the list of Numbers and take user input for a new number
 * Logic -> Create a Ordered Linked List having Numbers in ascending order. 
 * O/P -> The List of Numbers to a File.
 * 
 * @author : Aditya Gawde
 * 
 * @since : 18/11/2019
 */

var utility = require('../Utility/linkledListUtility');

var list = new utility.LinkedList();

var numberFromFileArray = utility.readFromFile('numberInput.txt')
try
{
    for( var i=0; i<numberFromFileArray.length; i++ ){
        if(isNaN(numberFromFileArray[i]))
        {
            throw 'Your file contain Alphabets. File must contain Numbers'
            
        }
        else
        {
            list.addNode(parseInt(numberFromFileArray[i]));
        }
            
    }
    console.log('\nLinked List\n');
    list.displayList();
    console.log('\n\nSorting Linked List');
    list.sortLinkedList();
    console.log();
    list.displayList();
    console.log();

    var userInput = utility.readLine().questionInt('\nEnter the number that you want to search : ');

    // searching for the user input in the list
    if (list.searchNode(userInput)) 
    {
        // user input found, removing from list
        list.removeNode(userInput);
        console.log(`\nNode ${userInput} removed from the Linked List`); 
    } 
    else
    {
        //user input not found, adding in list in the sorting way
        list.addInSortWay(userInput);
        console.log(`\nNode ${userInput} added to the Linked List`);
    }
    var content = list.printList();
    console.log('\nLinked List\n');
    list.displayList();
    console.log();
    console.log();
    // writing resulting list in the file
    utility.writeIntoFile('numberInput.txt', content);
    console.log('Writing to the File\n');
    
}
catch(error)
{
    console.log(error);
    
}






 