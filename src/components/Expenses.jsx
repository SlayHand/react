import './Expenses.css'
import ExpenseItem from './ExpenseItem.jsx'


import React from 'react'

const Expenses = (props) => {
  return (
    <div className='expenses'>
        <ExpenseItem data={props.expenses[0]}/>
        <ExpenseItem data={props.expenses[1]}/>
    </div>
  )
}

export default Expenses