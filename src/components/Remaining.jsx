import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

export default function Remaining() {

  const {expenses, budget} = useContext(AppContext)
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost)
  }, 0)

  const alertType = totalExpenses > budget ? 'bg-red-600' : 'bg-sky-500'

  return (
    <div className={`rounded-lg ${alertType} mb-4 p-10 text-white text-start md:flex-1`}>Remaining: <span className='font-bold'>{budget - totalExpenses}$</span></div>
  )
}
