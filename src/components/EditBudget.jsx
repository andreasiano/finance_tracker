import React, { useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	return (
		<>
			<input
				required='required'
				type='number'
				id='name'
                className='w-[180px] text-slate-700'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				onClick={() => props.handleSaveClick(value)}
                className='bg-green-500 ml-3 rounded-lg text-lg px-1'
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;
