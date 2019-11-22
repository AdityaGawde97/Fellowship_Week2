/**
 * UnOrdered List
 * Desc -> Read the Text from a file, split it into words and arrange it as Linked List. 
           Take a user input to search a Word in the List. If the Word is not found then 
           add it to the list, and if it found then remove the word from the List. In the 
           end save the list into a file
 * I/P -> Read from file the list of Words and take user input to search a Text
 * Logic -> Create a Unordered Linked List. The Basic Building Block is the Node Object. 
            Each node object must hold at least two pieces of information. One ref to the 
            data field and  second the ref to the next node object.
 * O/P -> The List of Words to a File.

 * Author Name : Aditya Gawde

 * Date : 18/11/2019

 */

var utility = require('../Utility/linkledListUtility'); 

// Creating object of LinkedList class defined in utility 
var list = new utility.LinkedList();

// Taking input from file and storing in array inputFromFileArray
var inputFromFileArray = utility.readFromFile('inputFile.txt');

//addind array elements in linked list 
for( var i=0; i<inputFromFileArray.length; i++ )
{
    list.addNode(inputFromFileArray[i]);
}

// printing linked list
console.log(list.printList());

// accepting user input 
var userInput = utility.readLine().question('Enter the word that you want to search : ');

// searching for the user input in the list
if (list.searchNode(userInput)) 
{
    // user input found, removing from list
    list.removeNode(userInput);
} 
else
{
    //user input not found, adding in list
    list.addNode(userInput);
}
var content = list.printList();

// writing resulting list in the file
utility.writeIntoFile('inputFile.txt', content);
