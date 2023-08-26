import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [editable, setEditable] = useState(false);
    const [updatedBudget, setUpdatedBudget] = useState(budget);

    const handleEditToggle = () => {
        setEditable(!editable);
    };

    const handleBudgetChange = (amount) => {
        setUpdatedBudget(prevBudget => prevBudget + amount);
    };

    const handleSave = () => {
        dispatch({ type: 'UPDATE_BUDGET', payload: updatedBudget });
        setEditable(false);
    };

    return (
        <div className='alert alert-secondary'>
            {editable ? (
                <div>
                    <input
                        type='number'
                        value={updatedBudget}
                        onChange={(e) => setUpdatedBudget(parseInt(e.target.value))}
                    />
                    <button onClick={() => handleBudgetChange(10)}>Increase by 10</button>
                    <button onClick={() => handleBudgetChange(-10)}>Decrease by 10</button>
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <span>Budget: £{budget}</span>
                    <button onClick={handleEditToggle}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default Budget;

