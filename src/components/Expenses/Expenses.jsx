import { useState } from 'react'
import ExpenseItem from './ExpenseItem.jsx'
import Card from '../UI/Card.jsx'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter.jsx'



const Expenses = (props) => {

  const filterChangeHandler = (filteredYear) => {
        console.log('Your data in Expenses.jsx' + filteredYear);
      }
  return (
    <Card className='expenses'>
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
          {
            props.expenses.map((expense) => {
              return <ExpenseItem expenseData={expense} key={expense.id}/>
            })
          }
    </Card>
  )
}

export default Expenses