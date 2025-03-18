import { Fragment, useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';
import Error from './components/UI/Error.jsx'

  const DYMMY_EXPENSES = [
{
   id: 'id1',
   date: new Date(2023, 10, 12),
   title: 'New book',
   price: 30.99
} ,
{ 
  id: 'id2',
  date: new Date(2024, 10, 12),
  title: 'New jeans',
  price: 99.99
} ,
{ 
  id: 'id3',
  date: new Date(2024, 11, 12),
  title: 'New bag',
  price: 199.99
},
]

const App = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true)
      try {
      const response = await fetch('http://localhost:3005/expenses')
      const responseData = await response.json()
      if(!response.ok){
        throw new Error('Failed fetching data')
      }
      setExpenses(responseData.expenses)
      } catch (error) {
        setError({
          title: 'An error has occured!',
          message: 'Failed fetching expenses data, please try again later.'
        })
        setShowError(true)
      }
      setIsFetching(false)
  }
  getExpenses()
  console.log(expenses)
  }, [])
  console.log(error)
  const errorHandler = () => {
    setError(null)
    setShowError(false)
  }
  const addExpenseHandler = (expense) => {
    console.log('in App.js')
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }
    return (
    <div className="App">
      { showError && (
        <Error 
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
          />
      )}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} isLoading={isFetching}/>
    </div>
  );
  }



export default App;