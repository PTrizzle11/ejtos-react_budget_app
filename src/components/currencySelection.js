import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelection = (props) => {
    const {dispatch, currency} = useContext(AppContext);
    const [curr, setCurr] = useState(currency);
    if (currency !== curr) {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr,
        });
    }
//So i got the drop down to work, I am on the styling part of step 3 and I already did parts 4 and 5
    return (
        <div>
            <select onChange = {(event)=>setCurr(event.target.value)}>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencySelection;
