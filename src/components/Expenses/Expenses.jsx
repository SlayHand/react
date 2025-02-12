import { useState } from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import Card from '../UI/Card.jsx';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter.jsx';
import ExpensesList from './ExpensesList.jsx';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => 
    expense.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No Expenses Found.</p>

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => {
      return <ExpenseItem expenseData={expense} key={expense.id}/>
    })
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter=
      {filterChangeHandler}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;