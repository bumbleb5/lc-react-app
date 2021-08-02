import './expenseItem.css';
import ExpenseDate from './expenseDate/expenseDate';
import Card from '../card/card';
import React, { useState } from 'react';

function ExpenseItem (props) {
    // hook, use state
    const [title, setTitle] = useState(props.expense.title);



    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    }

    return (
    <Card className="expense-item">
        <ExpenseDate date={ props.expense.date }/>
        <div className="expense-item__description">
            <h2>{ title }</h2>
            <div className="expense-item__price">${ props.expense.amount }</div>
        </div>
        <button onClick={ clickHandler }>Change Title</button>
    </Card>
    )
}

export default ExpenseItem;