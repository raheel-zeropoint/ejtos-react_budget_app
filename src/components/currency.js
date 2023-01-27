
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const submitEvent = (val) => {
        dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			});
       
    };
	return (
		<div className="alert alert-secondary">
            Currency : 
            <select className="btn btn-success" id="inputGroupSelect02" onChange={(e) => submitEvent(e.target.value)}>
						<option value="$" name="dollar">$ Dollar</option>
						<option value="£" name="pound">£ Pound</option>
                        <option value="€" name="euro">€ Euro</option>
                        <option value="₹" name="pound">₹ Rupees</option>
                        
				  </select>
        </div>
	);
};

export default Currency;