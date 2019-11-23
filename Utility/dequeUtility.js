class QNode
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Deque
{
    constructor()
    {
        this.front = null;
        this.rear = null;
    }

    isEmpty()
    {
        return this.front == null;
    }

    /**
     * @description : method to insert item in the front of the deque
     * 
     * @param {data to be inserted into the deque } data  
     */

    insertFront(data)
    {
        var newNode = new QNode(data);
        if(this.isEmpty())
        {
            this.rear = newNode;
        }
        else{
            this.front.prev = newNode;
        }
        newNode.next = this.front;
        this.front = newNode;
    }

    /**
     * @description : method to insert item at the rear of the deque
     * 
     * @param {data to be inserted into the deque} data 
     */

    insertRear(data)
    {
         var newNode = new QNode(data);
         if(this.isEmpty())
         {
             this.front = newNode
         }
         else{
             this.rear.next = newNode;
             newNode.prev = this.rear;
         }
         this.rear = newNode;
    }

   /**
     * @description : method to delete item from front of the deque 
     * 
     * @preturns : item deleted from the front
     */

    removeFront()
    {
        if(this.front == null)
        {
            return;
        }
        var temp = this.front;
        if(this.front.next == null)
        {
            this.rear = null;
        }
        else{
            this.front.next.prev = null
        }
        this.front = this.front.next;
        return temp;
    }

   /**
     * @description : method to delete item from rear of the deque 
     * 
     * @preturns : item deleted from the rear
     */

    removeRear()
    {
        if(this.rear == null)
        {
            return;
        }
        var temp = this.rear;
        if(this.front.next == null)
        {
            this.front = null;
        }
        else{
            this.rear.prev.next = null;
        }
        this.rear = this.rear.prev;
        return temp;
    }

    /**
     * @returns : front item
     */
    getFront(){
        if(this.isEmpty())
        {
            return;
        }
        return this.front.data;
    }

    /**
     * @returns : rear item
     */
    getRear(){
        if(this.isEmpty())
        {
            return false;
        }
        return this.rear.data;
    }

    /**
     * @description : traversing the deque from the front to rear
     * @returns : string 
     */

    printForword(){
        var current = this.front;
        var string = '';
        while(current != null)
        {
            string += current.data + ' '
            current = current.next;
        }
        return string;
    }

    /**
     * @description : traversing the deque from the rear to front
     * @returns : string 
     */

    printBackword(){
        
        var current = this.rear;
        var string = '';
        while(current != null) 
        {
            string += current.data + ' '
            current = current.prev;
        }
        return string;
    }
}

module.exports =
{
    Deque,

    readLine()
    {
        var read = require('readline-sync');
        return read;
    }
}