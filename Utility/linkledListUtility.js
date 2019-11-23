
//creating Node
class Node { 
    constructor(data) 
    { 
        this.data = data;            
        this.next = null
    } 
}
class LinkedList { 
    constructor() 
    { 
        // head of linked list
        this.head = null; 
    } 

    /**
     * @description : method for adding new node into the linked list
     * @param {data to be add in the linked list} data 
     */
    addNode(data) 
    { 
        // creating new node and pushing data
        var newNode = new Node(data); 

        var currentNode; 
    
        if (this.head == null)
            //if list is empty making new node as head  
            this.head = newNode; 
        else 
        { 
            currentNode = this.head; 
            // loop until the last node found
            while (currentNode.next) { 
                currentNode = currentNode.next; 
            } 
            // linking last node to new node
            currentNode.next = newNode; 
        } 
         
    } 

     /**
      * @description : method for removing node from list
      * @param {data to be removed from the list} data 
      */
    removeNode(data) 
    {   
        var temp = this.head, previous = null; 
  
        // If head node need to delete then  
        if (temp != null && temp.data == data) 
        { 
            this.head = temp.next; // Changing head 
            return; 
        } 
  
        // Search for the data to be deleted 
        while (temp != null && temp.data != data) 
        { 
            previous = temp; 
            temp = temp.next; 
        }     
  
        // If data was not present in linked list 
        if (temp == null) return; 
  
        // Unlink the node from linked list 
        previous.next = temp.next; 
    } 

    /**
     * @description : method for printing the linked list
     * @returns : string contain list data
     */
    printList() 
    { 
        var currentNode = this.head;  
        var listString = '';
        while (currentNode != null) { 
            //process.stdout.write(currentNode.data + ' '); 
            listString = listString + currentNode.data + ' ';
            currentNode = currentNode.next;
        }
        return listString;
        
    } 

    /**
     * @description : printing the list
     */
    displayList() 
    { 
        var currentNode = this.head;  
        while (currentNode != null) { 
            process.stdout.write(currentNode.data + ' '); 
            currentNode = currentNode.next; 
            if(currentNode != null)
                process.stdout.write('-> ')
        }
    }
      
    /**
     * @description : method for searching node in the list
     * @param {node to be search} data  
     * @returns : node found or not
     */
    searchNode(data)
    {
        var currentNode = this.head;   
        while (currentNode != null) 
        { 
            if (currentNode.data == data) 
                return true;    
            currentNode = currentNode.next; 
        } 
        return false;
    }

    /**
     * @description : method for sorting linked list in ascending order
     * */
    sortLinkedList()
    {
        var currentNode = this.head, nextNode = null;  
        var temp; 
        // checking linked list is empty or not 
        if(this.head == null) 
        {  
            return;  
        }  
        else 
        {  
            // loop until current node is null
            while(currentNode != null) 
            {  
                nextNode = currentNode.next; 
                while(nextNode != null) 
                {  
                    // comparing the current and next node
                    if( currentNode.data > nextNode.data ) 
                    {  
                        // current node is greater than next node
                        // then swaping both the node
                        temp = currentNode.data;  
                        currentNode.data = nextNode.data;  
                        nextNode.data = temp;  
                    }  
                    nextNode = nextNode.next;  
                }  
                currentNode = currentNode.next;  
            }      
        }  
    }

    /**
     * @description: method for inserting new node in sorted way
     * @param { node to be add } data
     */
    addInSortWay(data)
    {
        var newNode = new Node(data);
        var currentNode = this.head;

        //if head is null or head data is larger than new node 
        //the make new node as a head
        if( this.head == null || currentNode.data >= newNode.data )
        {
        
            newNode.next = this.head;
            this.head = newNode;
        } 
        else 
        {

            // loop until node larger than new node found
            while( currentNode.next != null && currentNode.next.data < newNode.data )
            {
                currentNode = currentNode.next;
            }
            // if new node larger than all node in the list then add to the last
            if(currentNode.next == null ){
                currentNode.next = newNode;
            }
            else
            {
                // node lager than new node is found then add before larger node
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }
        }
        
    }

}

module.exports=
{

    LinkedList,

    // returning the readline-sync object
    readLine(){
        var read = require('readline-sync');
        return read;
    },

    /**
     * @description : read input from file converting into array and returning the array
     * @param {passing the file name} fileName 
     * @returns retrived data converted into array
     * */
    readFromFile(fileName){
        var fs = require("fs");
        var fileObject = fs.readFileSync(fileName, 'utf8' );
        var fileArray = fileObject.trim().split(' ');
        return fileArray;
    },

    /**
     * 
     * @param {passing the file name} fileName 
     * @param {passing the content to write in file} content   
     */
    writeIntoFile(fileName,content)
    {
        var fs = require('fs');
        fs.writeFileSync(fileName,content,'utf8')
    },

    /**
     * @description : calculating the key
     * @param {data passed to calculate the key} key
     * @returns calculated slot number
     */
    calculateKey(key)
    {
        key = key % 11;
        return key;
    }

}