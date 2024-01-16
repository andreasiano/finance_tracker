import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span className='mr-8'>Budget: {props.budget}$</span>
			<button className='bg-green-500 rounded-lg text-lg px-1' type='button' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;
