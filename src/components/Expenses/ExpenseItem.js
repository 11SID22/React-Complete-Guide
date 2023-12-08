import React from 'react'

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('Change the Title')
    }
    const expenseDelHandler = () => {
        console.log('Expense is deleted')
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location} />
            <button onClick={clickHandler}>Change Title</button> 
            <button onClick={expenseDelHandler}>Delete Expense</button>
        </Card>
    );
}

export default ExpenseItem;