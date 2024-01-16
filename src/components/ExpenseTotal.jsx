import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'


export default function ExpenseTotal() {
  const {expenses} = useContext(AppContext)
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost)
  }, 0)
  return (
    <div className="bg-blue-300 rounded-lg mb-4 p-10 text-white text-start md:flex-1">Spent So Far: <span className='font-bold'>{totalExpenses}$</span></div>
  )
}
