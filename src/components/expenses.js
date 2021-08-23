import React, { useState } from 'react';
import './expensesList/expensesList';
import Card from './card/card';

import './expenses.css';
import ExpensesFilter from './expensesFilter/expensesFilter';
import ExpensesList from './expensesList/expensesList';
import ExpensesChart from './ExpensesChart';

// this was a regular function, the filter was not working
// scope issue
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  const yearChangeHandler = (e) => {
    setFilteredYear(e.target.value.toString());
    console.log('expenses.js selected year: ' + e.target.value.toString());
  };

  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
