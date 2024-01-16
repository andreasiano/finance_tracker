import React, {useContext, useState} from 'react'
import { AppContext } from '../context/AppContext'
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';

export default function Budget() {
  const {budget, dispatch} = useContext(AppContext)
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

  return (
    <div className="bg-teal-800 rounded-lg mb-4 p-10 text-white text-start md:flex-1">
      {isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
    </div>
  )
}
