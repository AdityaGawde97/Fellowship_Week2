
//creating Node
class Node { 
    constructor(data) 
    { 
        this.data = data;            
        this.next = null
    } 
}
class Stack 
{ 
    constructor() 
    { 
        // the top of the stack
        this.top = null; 
    } 

    /**
     * Method for pushing data in the stack in LIFO or FILO fasion
     * @param {*} data :  data to be pushed in the stack
     */
    push(data)
    {
        var newNode = new Node();

        // checking stack is overflow or not
        if( newNode == null )
        {
            console.log('Stack Overflow');
            return;
        }

        // stack is not full pushing data in the stack
        newNode.data = data;
        newNode.next = this.top;

        // making last pushed data as top
        this.top = newNode;
    }

    /**
     * method for poping data from stack
     * @returns pop data
     */
    pop()
    {
        if( this.top == null )
        {
            console.log('Stack Underflow');
            return;
        }
        var popData = this.top.data;

        // making second top node as top
        this.top = this.top.next;

        //return pop data
        return popData;
    }

    /**
     * @returns stack empty
     */
    isEmpty()
    {
        return this.top == null;
    }

    /**
     * @returns top data from stack
     */
    peek()
    {
        if( !isEmpty() )
        {
            return this.top.data;
        }
        console.log('Stack is Empty');
        return -1;
    }

    /**
     * @param string : to store the stack data
     * @returns stack data
     */
    printStack()
    {
        var string = '';

        if( this.top == null )
        {
            console.log('Stack Underflow');
            return;
        }
        else{
            var temp = new Node();
            temp = this.top;
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
    Stack,

    /**
     * 
     * @param {} expressionArray : Expression  array passed to the function
     * @returns the stack is empty or not
     */
    checkBalancedParentheses( expressionArray )
    {
        var stack = new Stack();
        for( var i=0; i<expressionArray.length; i++ )
        {
        
            if( expressionArray[i] == '(' )
            {
                // push open parentheses to the stack
                stack.push(expressionArray[i]);
            }
            if( expressionArray[i] == ')' )
            {
                if( stack.isEmpty() )
                {
                    return false;
                }
                // pop close parentheses from stack
                else if( !this.checkMatchPair( stack.pop(), expressionArray[i] ) )
                {
                    return false;
                }
            }
        }
        if( stack.isEmpty() ) 
        {
            return true;
        }
        return false;
    },

    /**
     * @param {} symbol1 : passing open parentheses
     * @param {} symbol2 : passing close parentheses
     * @returns if open and close parentheses match found
     */
    checkMatchPair( symbol1, symbol2 )
    {
        if( symbol1 == '(' && symbol2 == ')' )
        {
            return true;
        }
        return false;
    }
}