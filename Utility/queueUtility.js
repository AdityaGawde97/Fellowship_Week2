//creating Node
class Node { 
    constructor(data) 
    { 
        this.data = data;            
        this.next = null
    } 
}

class Queue 
{
    constructor()
    {
        this.front = null;
        this.rear = null;
    }

    /**
     * @description : method to add items in the queue
     * @param {*} item : passing item to add in the queue 
     */

    enQueue(item)
    {
        var newNode = new Node(item);
        if( this.rear == null )
        {
            this.front = this.rear = newNode;
            return;
        }

        this.rear.next = newNode;
        this.rear = newNode;
    }

    /**
     * @description : Method to dequeue or remove item from the queue
     * @returns : the deuque item
     */

    deQueue()
    {
        if( this.front == null )
        {
            return null;;
        }
        var temp = this.front;
        this.front = this.front.next;
        if( this.front == null )
            this.rear = null;
        return temp.data;
    }

    /**
     * @returns : queue is empty or not
     */

    isEmpty()
    {
        return this.front == null && this.rear == null;
    }

    /**
     * @returns item at front
     */
    peek()
    {
        
        if( this.isEmpty() )
        {
            return false;
        }
        return this.front.data;


    }

    /**
     * @param string : to store the queue data
     * @returns stack data
     */
    printQueue ()
    {
        var string = '';

        if( this.rear == null )
        {
            console.log('Queue is Empty');
            return 0;
        }
        else{
            var temp = new Node();
            temp = this.front;
            while( temp != null )
            {
                string = string + temp.data + ' ';
                temp = temp.next;
            }
            return string;
        }
    }
}

module.exports = {

    Queue,

    readLine(){
        var read = require('readline-sync');
        return read;
    }

}