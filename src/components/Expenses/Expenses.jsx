import { useState } from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import Card from '../UI/Card.jsx';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter.jsx';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => 
    expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <ExpenseItem expenseData={expense} key={expense.id} />
        ))
      ) : (
        <p>No expenses found for {filteredYear}.</p>
      )}
    </Card>
  );
};

export default Expenses;
