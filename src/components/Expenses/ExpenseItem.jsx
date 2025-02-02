import './ExpenseItem.css'
import Card from '../UI/Card.jsx'
import ExpenseDate from "./ExpenseDate.jsx"
import { useState } from 'react'



function ExpenseItem(props){
    const [title, setTitle] = useState(props.data.title)
    
    const clickHandler = () => {
        console.log('Clicked!')
        setTitle(`Updated by click ${title}`)
        console.log(title)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.data.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">{props.data.price}€</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
    )
}

export default ExpenseItem