import React, {useContext} from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

export default function ExpenseList() {
  const {expenses} = useContext(AppContext)
  return (
    <ul className='border-2 border-b-0 border-slate-300'>
     {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
      ))}
    </ul>
  )
}
