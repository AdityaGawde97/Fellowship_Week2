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

    getFront(){
        if(this.isEmpty())
        {
            return;
        }
        return this.front.data;
    }

    getRear(){
        if(this.isEmpty())
        {
            return false;
        }
        return this.rear.data;
    }

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