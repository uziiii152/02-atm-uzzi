#! /usr/bin/env node
import inquirer from 'inquirer';

let myBalance: number = 5000;
let myPin: number = 1234;

console.log(`welcome to the ATM-MACHINE`);


const questions = await inquirer.prompt([
    {
        type: 'number',
        name: 'pin',
        message: 'Enter your pin',
    }
])

if (questions.pin === myPin) {
    console.log('login success');
    let askOperation = await inquirer.prompt([
        {type:'list',
        name: 'operation',
        message: 'What would you like to do?',
        choices: ['Balance', 'Withdraw']
        }
    ])
if (askOperation.operation === 'Withdraw') {
    let amountAns = await inquirer.prompt([{
        type: 'number',
        name: 'amount',
        message: 'How much would you like to withdraw?'
    }])
    if (amountAns.amount>myBalance) {
        console.log('insufficient funds');
    }
    else {
        myBalance -= amountAns.amount;
        console.log(`you have withdrawn ${amountAns.amount}`);
        console.log(`your new balance is ${myBalance}`);
    }
}
else if (askOperation.operation === 'Balance'){
    console.log(`your current balance is ${myBalance}`);
}

}
else{
    console.log('wrong pin number');
}