import React, {useState, useContext} from 'react'
import { AppContext } from '../context/AppContext'
import {v4 as uuidv4} from 'uuid'

export default function AddExpenseForm() {
  const {dispatch} = useContext(AppContext)
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()

    const expense = {
      id: uuidv4(),
      name: name,
      cost :parseInt(cost),
    }

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    })
  }

  return (
    <form onSubmit={onSubmit} className='mb-5'>
    <div className="mb-4">
      <label className="block text-slate-700 text-lg mb-2" htmlFor="name">
        Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        required='required'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-slate-700 text-lg mb-2" htmlFor="cost">
        Cost
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="cost"
        type="text"
        required='required'
        value={cost}
        onChange={(event) => setCost(event.target.value)}
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Save
      </button>
    </div>
  </form>
  )
}
