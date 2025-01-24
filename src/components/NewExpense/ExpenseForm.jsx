import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }
        setEnteredTitle('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            <div className='new-expense__control'>
            <label>Price</label>
            <input type="number" min="0.01" step="0.01" onChange={priceChangeHandler}/>
        </div>
        <div className='new-expense__control'>
        <label>Date</label>
        <input type="date" min="2024-11-12" max="2026-01-31" onChange={dateChangeHandler}/>
    </div>
    <div className='new-expense__actions'>
    <button type="submit">Add Expense</button>
</div>
        </form>
    )
}

export default ExpenseForm