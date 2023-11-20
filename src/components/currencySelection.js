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
//So i got everything working except task 3!
    return (
        <div>
            <select className = 'alert alert-success currency' onChange = {(event)=>setCurr(event.target.value)}>
                <option className = "currOpt" value="$" name="Dollar">$ Dollar</option>
                <option className = "currOpt" value="£" name="Pound">£ Pound</option>
                <option className = "currOpt" value="€" name="Euro">€ Euro</option>
                <option className = "currOpt" value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencySelection;
