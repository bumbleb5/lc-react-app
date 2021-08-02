import ExpenseItem from './expenseItem/expenseItem';
import Card from './card/card';

import './expenses.css';

function Expenses(props) {
    return (
        <Card>
            <div className="expenses">
                <ExpenseItem expense={ props.expenses[0] }/>
                <ExpenseItem expense={ props.expenses[1] }/>
                <ExpenseItem expense={ props.expenses[2] }/>
                <ExpenseItem expense={ props.expenses[3] }/>
            </div>
        </Card>
    )
}

export default Expenses;