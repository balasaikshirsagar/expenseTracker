import React from 'react';

function Expense({income, expense}){
    return(
        <div>

            <div className='balance'>
            <h2>Your Balance</h2>
            <div>${income - expense}</div>

        </div>

            <div className='incomeexpense'>
                <div>
                    <h2>Income</h2>
                    <div id="income">${income}</div>
                </div>

                <div>
                    <h2>Expense</h2>
                    <div id="expense">${expense}</div>
                </div>

            </div>
          
        </div>
    )
}

export default Expense;