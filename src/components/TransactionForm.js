import React from 'react';
import { useState } from 'react';
import { uniqueId } from '../utils';

function TransactionForm({onNewTransaction}){

    const [nameValue, setNameValue] = useState('');
    const [amountValue, setAmountValue] = useState('');

    const addTransaction = (type, evt) =>{

        evt.preventDefault();
      const data =   {   
            id: uniqueId(),
            name: nameValue,
            amount: parseInt(amountValue),
            type: type
        };

        onNewTransaction(data);

        setNameValue('');
        setAmountValue('');
    }
    return(
        <div>
            <h2 id="addtransaction">Add New Transaction</h2>
            <form className='formdata'>
                <label id="transname">
                    Transaction Name 
                    <div>
                        <input type='text' value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}></input>
                    </div>
                </label>

                <label>
                    Amount 
                    <div>
                        <input type="number" value={amountValue}
                        onChange={(e) => setAmountValue(e.target.value)}></input>
                    </div>
                </label>

                <div>
                    <button className='btn btn-success mt-3 me-4' onClick={(e) => addTransaction('income',e)}>Add Income </button>
                    <button className='btn btn-danger mt-3' onClick={(e)=> addTransaction('expense',e)}>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default TransactionForm;