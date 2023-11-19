import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelection = (props) => {
    const {dispatch, currency} = useContext(AppContext);
    const [curr, setCurr] = useState('');
    //dispatch({
        //type: 'CHG_CURRENCY',
        //payload: curr,
    //}
    //);
//So i got the drop down to work, I am on the styling part of step 3 then i need to make it functional
    return (
        <div>
            <select onChange = {(event)=>setCurr(event.target.value)}>
                <option defaultValue value="">Currency...</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencySelection;
