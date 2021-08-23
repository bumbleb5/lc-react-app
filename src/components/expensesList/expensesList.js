import './expensesList.css';
import ExpenseItem from '../expenseItem/expenseItem';

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found</p>;

  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })}
    </ul>
  );
};

export default ExpensesList;
