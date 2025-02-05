import { useState } from 'react'
import ExpenseItem from './ExpenseItem.jsx'
import Card from '../UI/Card.jsx'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter.jsx'



const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(`Your data in Expenses.jsx ${selectedYear}`);
      }
  return (
    <Card className='expenses'>
        <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem data={props.expenses[0]}/>
        <ExpenseItem data={props.expenses[1]}/>
    </Card>
  )
}

export default Expenses