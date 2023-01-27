
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);
	const { budget, expenses, currency} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

    const submitEvent = (val) => {
        const obj = {
            Name: "test",
            value: val,
            expense: totalExpenses
        }
        dispatch({
				type: 'SET_BUDGET',
				payload: obj,
			});
       
    };

	return (
		<div className='alert alert-secondary'>
			<span>Budget: {currency}
                <input type="number" step="10" min="0" max="20000" value={budget} onChange={(e) => submitEvent(e.target.value)}/> 
                </span>
		</div>
	);
};

export default Budget;