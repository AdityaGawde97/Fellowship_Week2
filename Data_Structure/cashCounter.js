/**
 * Simulate Banking Cash Counter
 * Desc -> Create a Program which creates Banking Cash Counter where people come in to deposit 
 *         Cash and withdraw Cash. Have an input panel to add people to Queue to either deposit 
 *         or withdraw money and dequeue the people. Maintain the Cash Balance.
 * I/P -> Panel to add People to Queue to Deposit or Withdraw Money and dequeue 
 * Logic -> Write a Queue Class to enqueue and dequeue people to either deposit or withdraw 
 *          money and maintain the cash balance
 * 
 * Author Name : Aditya Gawde
 * 
 * Date : 20/11/2019
 */

 var utility = require('../Utility/queueUtility');

 // creating object of Queue class
 var queue = new utility.Queue;

 var bankBalance = 15000;

 console.log('\nBank Balance = ' + bankBalance);
 console.log();

 // accepting user input
 var peoples = utility.readLine().questionInt('How many people are in the Bank : ');

 // adding peoples into the queue
 for (let i = 1; i <= peoples ; i++) {
     queue.enQueue(i);
 }
 console.log(`${peoples} Peoples are added to the Queue `);
 
 // loop until all people removed from the queue
 while(queue.peek() != false)
 {
    try
    {
        
        console.log(`\nPerson : ${queue.peek()} `);
        console.log('What do you want to do ?');
        console.log('1)Deposit 2)Withdraw\n');
        var choice = utility.readLine().questionInt('Enter your Choice : ');
        switch (choice) {
            case 1:
                console.log('\n*** Deposite ***');
                var depositeAmount = utility.readLine().questionInt('Enter your Deposite Money : ');
                bankBalance += depositeAmount;
                console.log(`Person ${queue.deQueue()} remove from the Queue`);
                console.log('\nBank Balance = ' + bankBalance + '\n');
                break;

            case 2:
                console.log('\n*** Withdraw ***');
                var withAmount = utility.readLine().questionInt('Enter your Withdraw Amount : ');
                if( withAmount < bankBalance ){
                    bankBalance -= withAmount;
                    console.log(`Person ${queue.deQueue()} remove from the Queue`);
                    console.log('\nBank Balance = ' + bankBalance + '\n');
                }
                else
                    throw 'Please Enter the amount less than Bank Balanced';
                break;

            default:
                console.log('Please enter the valid choice');
                break;
        }
    }
    catch( error )
    {
        console.log( error );
    }
 }