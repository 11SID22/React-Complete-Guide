import React, { useState } from 'react'

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log('Change the Title');
    }
    const updateAmountHandler = () => {
        setAmount('100');
    }
    const expenseDelHandler = () => {
        console.log('Expense is deleted')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={title} amount={amount} location={props.location} />
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={expenseDelHandler}>Delete Expense</button>
            <button onClick={updateAmountHandler}>Update Amount</button>
        </Card>
    );
}

export default ExpenseItem;