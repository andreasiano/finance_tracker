import React, {useContext} from 'react'
import {MdClose} from 'react-icons/md'
import { AppContext } from '../context/AppContext'


export default function ExpenseItem({name, cost, id}) {

  const {dispatch} = useContext(AppContext)
  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
    })
  }
  return (
    <li className="bg-white flex justify-between border-b-2 border-slate-300 p-5 text-slate-400 text-start md:flex-1">
      {name}
      <span className='flex items-center space-x-2'>
        <span className='font-medium bg-blue-300 rounded-full px-2 text-slate-700'>{cost}$</span>
        <MdClose onClick={handleDeleteExpense} size={20} className='cursor-pointer' />
      </span>
    </li> 
  )
}
