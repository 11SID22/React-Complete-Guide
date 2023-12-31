import React, { useState } from 'react'

import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>













    );

}

export default Expenses;