import './ExpenseItem.css'
import Card from '../UI/Card.jsx'
import ExpenseDate from "./ExpenseDate.jsx"
import { useState } from 'react'



function ExpenseItem(props){
    const [title, setTitle] = useState(props.expenseData.title)
    
    const clickHandler = () => {
        console.log('Clicked!')
        setTitle(`Updated by click ${title}`)
        console.log(title)
    }

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}€</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
        </li>
    )
}

export default ExpenseItem