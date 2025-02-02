import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';

const App = () => {
  const expenses = [
{
   date: new Date(2024, 10, 12),
   title: 'New book',
   price: 30.99
} ,
{
  date: new Date(2024, 10, 12),
  title: 'New jeans',
  price: 99.99
}
]

const addExpenseHandler = (expense) => {
  console.log('In App.js')
  console.log(expense)
}

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;