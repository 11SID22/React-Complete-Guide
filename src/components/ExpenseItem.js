import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2023, 11, 25);
    const expenseTitle = 'Christmas Celebration';
    const expenseAmount = 10000;
    const locationOfExpenditure = 'Mumbai';

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>Rs{expenseAmount}</div>
                <div className='expense-item__price'>{locationOfExpenditure}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;